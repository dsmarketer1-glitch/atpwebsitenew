// Conversion-focused landing pages (one per target keyword). These are funnel
// pages with NO site nav — service/keyword focused, not location-specific.
// Rendered by components/LandingTemplate.jsx at /lp/[slug].

export const landingPages = [
    {
        slug: 'emergency-plumbing',
        keyword: 'Emergency Plumbing',
        metaTitle: '24/7 Emergency Plumber — Fast Response | Anytime Plumbing 365',
        metaDescription:
            'Plumbing emergency? Licensed emergency plumbers answer 24/7 with fast dispatch and upfront pricing. Burst pipes, backups, no water — we fix it fast. Call 214-307-4264.',
        heroImage: '/images/service/actual/emergency-plumber.png',
        heroImageAlt: 'Emergency plumber responding to a call',
        eyebrow: '24/7 Emergency Plumbers — On Call Right Now',
        h1: 'Plumbing Emergency? We Answer Fast — Day or Night.',
        subhead:
            'Burst pipes, overflowing toilets, no water, sewage backups — our licensed emergency plumbers are standing by 24/7. A live person answers, we dispatch fast, and we fix it right the first time.',
        heroBullets: [
            'A live person answers — no voicemail, no waiting',
            'Rapid dispatch — often same-hour arrival',
            'Upfront, honest pricing before we start',
            'Licensed, insured & background-checked pros',
        ],
        urgency: 'Water damage gets worse by the minute. The faster we arrive, the less it costs you.',
        problem: {
            heading: 'A Plumbing Emergency Never Waits for a Good Time',
            intro:
                'When water is where it should not be, every minute matters. If any of this is happening right now, call us — we are ready.',
            signs: [
                'Burst or leaking pipe flooding the home',
                'Toilet overflowing or will not stop running',
                'No water — or no hot water',
                'Sewage backing up into tubs, sinks, or drains',
                'Water heater leaking or failed',
                'Water pooling around the foundation or ceiling',
            ],
            image: '/images/service/actual/emergency-plumbing.png',
            imageAlt: 'Emergency plumbing repair in progress',
        },
        solution: {
            heading: 'One Call, and the Problem Is Handled',
            intro:
                'Our emergency team stops the damage, finds the real cause, and gives you a clear, upfront price before any work begins — so there are no surprises when the job is done.',
            services: [
                'Burst & leaking pipe repair',
                'Clogged & overflowing toilet repair',
                'Sewer & drain backup clearing',
                'Water heater repair & replacement',
                'Emergency leak detection & shut-off',
                'Water cleanup & damage mitigation',
            ],
            image: '/images/service/actual/plumbing-repair.png',
            imageAlt: 'Licensed plumber making an emergency repair',
        },
        testimonials: [
            { quote: 'We had a sewage backup on a Sunday night and they came right away. Professional, clean, and honest pricing. Lifesavers.', name: 'Gina R.', source: 'Google Review' },
            { quote: 'Burst pipe at 2 AM — a real person answered and a plumber was at my door within the hour. Fixed fast and fair.', name: 'Marcus T.', source: 'Google Review' },
            { quote: 'Same-day emergency service when no one else would come out. Explained everything and the price up front. Highly recommend.', name: 'Akia J.', source: 'Google Review' },
        ],
        faqs: [
            { question: 'Do you really answer 24/7?', answer: 'Yes — a live person answers day or night, 365 days a year, including weekends and holidays. No voicemail, no answering service runaround.' },
            { question: 'How fast can you get here?', answer: 'For true emergencies we dispatch the nearest available plumber immediately and aim to arrive within about an hour in most areas.' },
            { question: 'Will I know the price before work starts?', answer: 'Always. We give you a clear, upfront price before any work begins — you approve it first. No surprises on the final bill.' },
            { question: 'Do you charge extra just to come out at night?', answer: 'We believe in honest, transparent pricing. We will explain any after-hours details up front so you can decide with full information.' },
        ],
        finalCta: {
            heading: 'Stop the Damage — Call Now',
            subhead: 'Our emergency plumbers are standing by 24/7. Call now or request a callback and we will be on our way.',
        },
    },
    {
        slug: 'burst-pipe-leak',
        keyword: 'Burst Pipe & Leak',
        metaTitle: 'Burst Pipe & Leak Repair — Fast Leak Detection | Anytime Plumbing 365',
        metaDescription:
            'Burst pipe or hidden leak? Our experts find the source fast and repair it right — minimizing water damage and your bill. Upfront pricing, 24/7. Call 214-307-4264.',
        heroImage: '/images/service/actual/water-leak-detection.png',
        heroImageAlt: 'Technician performing leak detection',
        eyebrow: 'Burst Pipe or Hidden Leak? Act Now.',
        h1: 'Stop the Damage — Fast Burst Pipe & Leak Repair.',
        subhead:
            'A burst pipe or hidden leak can flood your home and spike your water bill in hours. Our leak-detection experts pinpoint the source fast and fix it right — minimizing the damage and the cost.',
        heroBullets: [
            'Advanced leak detection — no unnecessary digging',
            'Fast water shut-off & damage control',
            'Lasting repairs, not quick patches',
            'Upfront pricing — no surprises',
        ],
        urgency: 'Every hour a pipe leaks, the damage — and the water bill — keeps growing.',
        problem: {
            heading: 'Think You Have a Leak? These Are the Warning Signs',
            intro:
                'Leaks often hide behind walls, under floors, or underground. If you notice any of these, call us before the damage spreads.',
            signs: [
                'A sudden spike in your water bill',
                'Water stains on walls, ceilings, or floors',
                'The sound of running water when everything is off',
                'Low or dropping water pressure',
                'Musty smells, mold, or peeling paint',
                'Warm or wet spots on the floor',
            ],
            image: '/images/service/actual/drain-pipe-repair.png',
            imageAlt: 'Plumber repairing a damaged pipe',
        },
        solution: {
            heading: 'We Find It Fast — and Fix It for Good',
            intro:
                'Using modern leak-detection tools, we locate the exact source without tearing your home apart, then repair it properly and show you the price up front.',
            services: [
                'Burst & broken pipe repair',
                'Hidden & underground leak detection',
                'Slab & under-floor leak location',
                'Pipe repair, repiping & rerouting',
                'Water shut-off & damage mitigation',
                'Fixture & supply-line leak repair',
            ],
            image: '/images/service/actual/water-leak-detection-repair.jpg',
            imageAlt: 'Water leak detection and repair',
        },
        testimonials: [
            { quote: 'My water bill doubled and they found a hidden leak under the slab in minutes. Fixed it without destroying my floors.', name: 'Derrick M.', source: 'Google Review' },
            { quote: 'Pipe burst behind a wall — they located it fast, stopped the flooding, and the repair has held perfectly. Fair price too.', name: 'Sandra P.', source: 'Google Review' },
            { quote: 'Courteous, professional, and they explained everything before starting. No surprise charges. Would call again in a heartbeat.', name: 'Akia J.', source: 'Google Review' },
        ],
        faqs: [
            { question: 'How do you find a leak without tearing up my house?', answer: 'We use electronic and acoustic leak-detection equipment to pinpoint the exact location first, so repairs are targeted and minimally invasive.' },
            { question: 'A pipe just burst — what should I do right now?', answer: 'Shut off your main water valve if you can, then call us. We will walk you through it and get a plumber out fast to stop the damage.' },
            { question: 'Do you handle the water damage too?', answer: 'We stop the source and help with immediate water cleanup and mitigation so the damage does not keep spreading.' },
            { question: 'Will insurance cover it?', answer: 'Many sudden pipe-burst events are covered. We document the work clearly so you have what you need for a claim.' },
        ],
        finalCta: {
            heading: 'Leaking Right Now? Let’s Stop It.',
            subhead: 'Call now or request a fast callback — our leak experts will pinpoint the problem and protect your home.',
        },
    },
    {
        slug: 'drain-sewer',
        keyword: 'Drain & Sewer',
        metaTitle: 'Drain Cleaning & Sewer Repair — Fast, Done Right | Anytime Plumbing 365',
        metaDescription:
            'Clogged drain or sewer backup? We clear it fast with pro equipment and camera-inspect to fix the real cause. Upfront pricing, 24/7. Call 214-307-4264.',
        heroImage: '/images/service/actual/drain-cleaning.png',
        heroImageAlt: 'Professional drain cleaning',
        eyebrow: 'Clogged Drain or Sewer Backup?',
        h1: 'Fast Drain Cleaning & Sewer Repair — Done Right.',
        subhead:
            'Slow drains, recurring clogs, or a sewer line backing up? We clear it fast with professional equipment and camera-inspect the line to fix the real cause — not just the symptom.',
        heroBullets: [
            'Powerful hydro-jetting & drain machines',
            'Video camera inspection finds the root cause',
            'Sewer line repair & replacement',
            'Upfront pricing — no surprises',
        ],
        urgency: 'A slow drain today can become a sewage backup tomorrow. Clear it before it gets worse.',
        problem: {
            heading: 'Signs Your Drain or Sewer Line Needs Attention',
            intro:
                'Drain and sewer problems rarely fix themselves. If you are seeing any of these, it is time for a professional look.',
            signs: [
                'Sinks, tubs, or showers draining slowly',
                'Gurgling sounds from drains or toilets',
                'The same drain clogging again and again',
                'Foul sewage odor inside or outside',
                'Multiple fixtures backing up at once',
                'Wet patches or sewage pooling in the yard',
            ],
            image: '/images/service/actual/sewer-line-repair.png',
            imageAlt: 'Sewer line repair',
        },
        solution: {
            heading: 'We Clear It — and Keep It Clear',
            intro:
                'We clear the clog fast, then use a camera inspection to see what is really going on so you get a lasting fix, with a clear price before we start.',
            services: [
                'Drain cleaning & clog removal',
                'Hydro jetting for deep buildup',
                'Rooter & main-line service',
                'Video sewer camera inspection',
                'Sewer line repair & replacement',
                'Trenchless options where available',
            ],
            image: '/images/service/actual/hydrojetting.png',
            imageAlt: 'Hydro jetting a drain line',
        },
        testimonials: [
            { quote: 'Main line kept backing up — they jetted it and camera-inspected to show me the real problem. No more backups since.', name: 'Travis L.', source: 'Google Review' },
            { quote: 'Came out same day, cleared a nasty kitchen clog fast, and the price was exactly what they quoted. Great service.', name: 'Akia J.', source: 'Google Review' },
            { quote: 'Professional and clean. Found a cracked sewer pipe with their camera and fixed it right. Highly recommend.', name: 'Gina R.', source: 'Google Review' },
        ],
        faqs: [
            { question: 'Why does my drain keep clogging?', answer: 'Recurring clogs usually mean buildup deeper in the line or a damaged pipe. Our camera inspection finds the real cause so we can fix it for good instead of treating it over and over.' },
            { question: 'What is hydro jetting?', answer: 'Hydro jetting uses high-pressure water to scour grease, scale, and roots from the inside of the pipe — far more thorough than a basic snake.' },
            { question: 'Can you fix a sewer line without digging up my yard?', answer: 'In many cases, yes. We offer trenchless repair options where the pipe condition allows, which saves your landscaping.' },
            { question: 'Do you offer same-day service?', answer: 'Yes — in most cases we can clear a clogged drain or backed-up line the same day you call.' },
        ],
        finalCta: {
            heading: 'Clear the Clog for Good',
            subhead: 'Call now or request a callback — we will clear the line fast and show you exactly what caused it.',
        },
    },
    {
        slug: 'slab-leak-detection-repair',
        keyword: 'Slab Leak Detection & Repair',
        metaTitle: 'Slab Leak Detection & Repair — Pinpoint Accuracy | Anytime Plumbing 365',
        metaDescription:
            'Slab leak under your foundation? Our specialists pinpoint it with electronic detection and repair it with minimal disruption. Upfront pricing, 24/7. Call 214-307-4264.',
        heroImage: '/images/service/actual/slab-leak-detection.png',
        heroImageAlt: 'Slab leak detection equipment in use',
        eyebrow: 'Slab Leak Specialists',
        h1: 'Slab Leak? We Find It Fast — and Fix It for Good.',
        subhead:
            'A slab leak under your foundation can waste thousands of gallons and threaten your home’s structure. Our specialists pinpoint the exact location with electronic detection and repair it with minimal disruption.',
        heroBullets: [
            'Non-invasive electronic leak location',
            'Pinpoint accuracy — minimal floor damage',
            'Permanent repair & reroute options',
            'Licensed, insured slab-leak specialists',
        ],
        urgency: 'An untreated slab leak wastes water every minute and can crack your foundation. Catch it early.',
        problem: {
            heading: 'Warning Signs of a Slab Leak',
            intro:
                'Slab leaks hide beneath your foundation, so the signs are easy to miss. If any of these sound familiar, get it checked now.',
            signs: [
                'A warm or hot spot on the floor',
                'The sound of running water with everything off',
                'An unexplained spike in your water bill',
                'Cracks in floors, walls, or the foundation',
                'Low water pressure throughout the home',
                'Damp carpet, warped flooring, or mildew smell',
            ],
            image: '/images/service/actual/water-leak-detection.png',
            imageAlt: 'Electronic leak detection on a floor',
        },
        solution: {
            heading: 'Pinpointed, Not Guessed — Repaired to Last',
            intro:
                'We locate the exact leak under your slab with electronic detection — no jackhammering to “go find it.” Then we explain your repair options and price up front, choosing the least invasive fix for your home.',
            services: [
                'Electronic slab leak detection',
                'Pinpoint leak location',
                'Spot repair under the slab',
                'Pipe rerouting to avoid the slab',
                'Repiping for recurring leaks',
                'Water cleanup & damage mitigation',
            ],
            image: '/images/service/actual/water-leak-detection-repair.jpg',
            imageAlt: 'Slab leak repair work',
        },
        testimonials: [
            { quote: 'Heard water running under the floor — they pinpointed the slab leak exactly and rerouted the line with barely any mess.', name: 'Carla D.', source: 'Google Review' },
            { quote: 'My water bill was insane. They found the slab leak fast and gave me honest repair options up front. Saved me thousands.', name: 'Derrick M.', source: 'Google Review' },
            { quote: 'True professionals. Explained exactly where the leak was and how they would fix it. Clean work and a fair price.', name: 'Gina R.', source: 'Google Review' },
        ],
        faqs: [
            { question: 'How do you find a slab leak without breaking the floor?', answer: 'We use electronic and acoustic equipment to listen for and pinpoint the leak location precisely, so any access is targeted and minimal — no guesswork.' },
            { question: 'Do you have to jackhammer my floor?', answer: 'Not always. Depending on the leak, we can often reroute or repair with minimal disruption. We will explain every option before you decide.' },
            { question: 'Can a slab leak damage my foundation?', answer: 'Yes — left untreated, a slab leak can erode soil and cause foundation movement and cracks. Catching it early protects your home.' },
            { question: 'Will I get a price before work begins?', answer: 'Always. We locate the leak, explain your options, and give you an upfront price so you are in control.' },
        ],
        finalCta: {
            heading: 'Suspect a Slab Leak? Find Out Today.',
            subhead: 'Call now or request a callback — our specialists will pinpoint the leak and protect your foundation.',
        },
    },
];

export function getLandingBySlug(slug) {
    return landingPages.find((p) => p.slug === slug);
}

export function getAllLandingSlugs() {
    return landingPages.map((p) => p.slug);
}
