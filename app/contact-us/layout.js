// The contact page is a client component, so its metadata (incl. canonical)
// lives here in a route-level layout.
export const metadata = {
    title: 'Contact Anytime Plumbing 365 | Irving & Garland, TX',
    description:
        'Contact Anytime Plumbing 365 for plumbing service in Dallas-Fort Worth. Reach our Irving or Garland office or send a service request online.',
    alternates: { canonical: '/contact-us' },
};

export default function ContactLayout({ children }) {
    return children;
}
