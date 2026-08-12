import Link from 'next/link';

export default function AnnouncementBar() {
    return (
        <Link href="/financing" className="announcement-bar">
            <span className="announcement-bar-text">New Plumbing at 0% Interest for 60 Month</span>
        </Link>
    );
}
