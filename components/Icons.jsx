// Reusable inline SVG icons (no emojis). All inherit currentColor.
// Stroke icons use a 24x24 viewBox; pass size/strokeWidth/className as needed.

const base = (size) => ({
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': 'true',
});

export const IconPhone = ({ size = 20, className = '' }) => (
    <svg {...base(size)} className={className}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
);

export const IconMapPin = ({ size = 20, className = '' }) => (
    <svg {...base(size)} className={className}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
);

export const IconClock = ({ size = 20, className = '' }) => (
    <svg {...base(size)} className={className}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
);

export const IconWrench = ({ size = 20, className = '' }) => (
    <svg {...base(size)} className={className}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
);

export const IconDollar = ({ size = 20, className = '' }) => (
    <svg {...base(size)} className={className}><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
);

export const IconCheck = ({ size = 20, className = '' }) => (
    <svg {...base(size)} className={className}><polyline points="20 6 9 17 4 12" /></svg>
);

export const IconShield = ({ size = 20, className = '' }) => (
    <svg {...base(size)} className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>
);

export const IconUsers = ({ size = 20, className = '' }) => (
    <svg {...base(size)} className={className}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
);

export const IconSparkle = ({ size = 20, className = '' }) => (
    <svg {...base(size)} className={className}><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" /></svg>
);

export const IconAward = ({ size = 20, className = '' }) => (
    <svg {...base(size)} className={className}><circle cx="12" cy="8" r="6" /><path d="M8.21 13.89 7 22l5-3 5 3-1.21-8.11" /></svg>
);

export const IconCalendar = ({ size = 20, className = '' }) => (
    <svg {...base(size)} className={className}><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
);

export const IconCreditCard = ({ size = 20, className = '' }) => (
    <svg {...base(size)} className={className}><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
);

export const IconChart = ({ size = 20, className = '' }) => (
    <svg {...base(size)} className={className}><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
);

export const IconBadge = ({ size = 20, className = '' }) => (
    <svg {...base(size)} className={className}><rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="8" cy="12" r="2.2" /><line x1="13" y1="10" x2="18" y2="10" /><line x1="13" y1="14" x2="17" y2="14" /></svg>
);

export const IconStar = ({ size = 18, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
);

export const IconArrowRight = ({ size = 18, className = '' }) => (
    <svg {...base(size)} className={className}><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
);

export const IconArrowUp = ({ size = 20, className = '' }) => (
    <svg {...base(size)} className={className}><line x1="12" y1="19" x2="12" y2="5" /><polyline points="5 12 12 5 19 12" /></svg>
);

export const IconChevronDown = ({ size = 14, className = '' }) => (
    <svg {...base(size)} className={className}><polyline points="6 9 12 15 18 9" /></svg>
);

export const IconX = ({ size = 20, className = '' }) => (
    <svg {...base(size)} className={className}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
);

export const IconDroplet = ({ size = 20, className = '' }) => (
    <svg {...base(size)} className={className}><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" /></svg>
);
