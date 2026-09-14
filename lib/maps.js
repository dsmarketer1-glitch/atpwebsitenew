// Map helpers — OpenStreetMap based (no API key, no billing).
//
//   - osmEmbedUrl(lat, lng): builds an OpenStreetMap embed <iframe> src that
//     shows a marker at the point. Server-rendered on pin cards and the /pins
//     page — no JS map library needed for display.
//   - reverseGeocode(lat, lng): optional server-side Nominatim lookup used only
//     to derive a human-readable address when the client didn't send one. Never
//     blocks a pin; returns null on any failure.
//
// The interactive location PICKER (search + click) uses Leaflet on the client
// (components/LocationPicker.jsx); this module only covers server-side needs.

// Small bounding box (~0.01deg ≈ 1km) around the point so the embed zooms in.
export function osmEmbedUrl(lat, lng) {
    if (lat == null || lng == null) return null;
    const d = 0.01;
    const minLon = (Number(lng) - d).toFixed(6);
    const minLat = (Number(lat) - d).toFixed(6);
    const maxLon = (Number(lng) + d).toFixed(6);
    const maxLat = (Number(lat) + d).toFixed(6);
    const bbox = `${minLon},${minLat},${maxLon},${maxLat}`;
    const marker = `${Number(lat).toFixed(6)},${Number(lng).toFixed(6)}`;
    return `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(bbox)}&layer=mapnik&marker=${encodeURIComponent(marker)}`;
}

// Returns { address } or null. Server-only, best-effort. Nominatim asks callers
// to identify themselves via a descriptive User-Agent / Referer.
export async function reverseGeocode(lat, lng) {
    if (lat == null || lng == null) return null;
    try {
        const url = `https://nominatim.openstreetmap.org/reverse?lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(lng)}&format=jsonv2`;
        const res = await fetch(url, {
            headers: { 'User-Agent': 'AnytimePlumbing365-Pins/1.0 (https://anytimeplumbing365.com)' },
        });
        if (!res.ok) {
            console.warn(`reverseGeocode HTTP ${res.status}`);
            return null;
        }
        const data = await res.json();
        return data && data.display_name ? { address: data.display_name } : null;
    } catch (err) {
        console.warn('reverseGeocode failed:', err.message);
        return null;
    }
}
