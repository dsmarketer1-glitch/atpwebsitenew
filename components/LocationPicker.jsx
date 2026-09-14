'use client';

// Interactive location picker for the pin capture form.
// Lets a tech set the job location from anywhere — no device GPS required:
//   - search an address (OpenStreetMap Nominatim), or
//   - click the map to drop a marker, or
//   - drag the marker.
// Reports { lat, lng, address } up via onChange.
//
// Leaflet + its CSS are loaded from CDN at runtime (client only) so nothing
// touches `window` during SSR and no global-CSS import is required.

import { useEffect, useRef, useState } from 'react';

const DFW_CENTER = [32.7767, -96.797]; // Dallas
const LEAFLET_VERSION = '1.9.4';

function ensureLeafletCss() {
    if (typeof document === 'undefined') return;
    if (document.getElementById('leaflet-css')) return;
    const link = document.createElement('link');
    link.id = 'leaflet-css';
    link.rel = 'stylesheet';
    link.href = `https://unpkg.com/leaflet@${LEAFLET_VERSION}/dist/leaflet.css`;
    document.head.appendChild(link);
}

async function nominatimReverse(lat, lng) {
    try {
        const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=jsonv2`,
            { headers: { Accept: 'application/json' } }
        );
        if (!res.ok) return null;
        const data = await res.json();
        return data && data.display_name ? data.display_name : null;
    } catch {
        return null;
    }
}

async function nominatimSearch(query) {
    try {
        const res = await fetch(
            `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=jsonv2&limit=1`,
            { headers: { Accept: 'application/json' } }
        );
        if (!res.ok) return null;
        const data = await res.json();
        return Array.isArray(data) && data.length > 0 ? data[0] : null;
    } catch {
        return null;
    }
}

export default function LocationPicker({ onChange }) {
    const mapElRef = useRef(null);
    const mapRef = useRef(null);
    const markerRef = useRef(null);
    const leafletRef = useRef(null);

    const [query, setQuery] = useState('');
    const [searching, setSearching] = useState(false);
    const [selected, setSelected] = useState(null); // { lat, lng, address }

    // Report selection up whenever it changes.
    useEffect(() => {
        if (selected && typeof onChange === 'function') onChange(selected);
    }, [selected, onChange]);

    const placeMarker = (L, lat, lng) => {
        const map = mapRef.current;
        if (!map) return;
        if (markerRef.current) {
            markerRef.current.setLatLng([lat, lng]);
        } else {
            const marker = L.marker([lat, lng], { draggable: true }).addTo(map);
            marker.on('dragend', async () => {
                const p = marker.getLatLng();
                const address = await nominatimReverse(p.lat, p.lng);
                setSelected({ lat: p.lat, lng: p.lng, address });
            });
            markerRef.current = marker;
        }
    };

    // Initialize the map once.
    useEffect(() => {
        let cancelled = false;
        ensureLeafletCss();
        (async () => {
            const L = (await import('leaflet')).default;
            if (cancelled || !mapElRef.current || mapRef.current) return;
            leafletRef.current = L;

            // Default marker icons reference bundled image paths that break under
            // bundlers — point them at the CDN copies instead.
            delete L.Icon.Default.prototype._getIconUrl;
            L.Icon.Default.mergeOptions({
                iconRetinaUrl: `https://unpkg.com/leaflet@${LEAFLET_VERSION}/dist/images/marker-icon-2x.png`,
                iconUrl: `https://unpkg.com/leaflet@${LEAFLET_VERSION}/dist/images/marker-icon.png`,
                shadowUrl: `https://unpkg.com/leaflet@${LEAFLET_VERSION}/dist/images/marker-shadow.png`,
            });

            const map = L.map(mapElRef.current).setView(DFW_CENTER, 10);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors',
                maxZoom: 19,
            }).addTo(map);

            map.on('click', async (e) => {
                placeMarker(L, e.latlng.lat, e.latlng.lng);
                const address = await nominatimReverse(e.latlng.lat, e.latlng.lng);
                setSelected({ lat: e.latlng.lat, lng: e.latlng.lng, address });
            });

            mapRef.current = map;
        })();

        return () => {
            cancelled = true;
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
                markerRef.current = null;
            }
        };
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!query.trim()) return;
        setSearching(true);
        try {
            const result = await nominatimSearch(query.trim());
            const L = leafletRef.current;
            if (result && L && mapRef.current) {
                const lat = parseFloat(result.lat);
                const lng = parseFloat(result.lon);
                mapRef.current.setView([lat, lng], 16);
                placeMarker(L, lat, lng);
                setSelected({ lat, lng, address: result.display_name });
            }
        } finally {
            setSearching(false);
        }
    };

    return (
        <div className="location-picker">
            <div className="location-picker-search">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') handleSearch(e); }}
                    placeholder="Search an address, then click the map to fine-tune"
                    className="location-picker-input"
                />
                <button type="button" onClick={handleSearch} className="btn btn-outline btn-sm" disabled={searching}>
                    {searching ? 'Searching…' : 'Search'}
                </button>
            </div>
            <div ref={mapElRef} className="location-picker-map" />
            <p className="location-picker-status">
                {selected
                    ? `Selected: ${selected.address || `${selected.lat.toFixed(5)}, ${selected.lng.toFixed(5)}`}`
                    : 'No location selected yet — search or click the map.'}
            </p>
        </div>
    );
}
