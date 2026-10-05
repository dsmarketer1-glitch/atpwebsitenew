// Cities we serve across the Dallas–Fort Worth Metroplex.
// City pages live at /[city]. Each city carries its own intro content
// (headline, paragraphs, service list) rendered by LocationTemplate.
// Bold emphasis is written as **inline markdown** and parsed at render time.
// Communities are no longer used (the [city]/[community] route generates nothing
// while every city's communities array is empty).
export const cities = [
    {
        slug: 'dallas',
        name: 'Dallas',
        communities: [],
        headline: 'Drain Cleaning, Drain Repair, Leak Detection & Emergency Plumbing in Dallas',
        paragraphs: [
            'From established Dallas neighborhoods such as **Munger Place, Junius Heights, and Winnetka Heights** to newer residential areas throughout the city, plumbing and drainage systems can present very different problems depending on the age and construction of the home. Dallas recognizes numerous historic residential districts throughout the city.',
            'Anytime Plumbing 365 provides Dallas homeowners with professional **drain cleaning, drain repair, leak detection, emergency plumbing, and water cleanup and restoration services**. Whether you have a kitchen drain that will not clear, a recurring main-line backup, a damaged sewer or drain pipe, or water appearing where it should not be, our team can investigate the source and explain your repair options.',
            'When a broken pipe, overflowing drain, plumbing leak, or sewer backup causes water damage, we can also help address the water inside the property instead of leaving you to coordinate the next step on your own.',
        ],
        serviceList: [
            'Drain cleaning and clogged drain service',
            'Drain and sewer-line repair',
            'Leak and slab leak detection',
            'Emergency plumbing',
            'Water cleanup and restoration',
            'Plumbing-related water damage service',
        ],
    },
    {
        slug: 'fort-worth',
        name: 'Fort Worth',
        communities: [],
        headline: 'Fort Worth Drain Cleaning, Drain Repair & Emergency Plumbing',
        paragraphs: [
            'Fort Worth includes everything from historic areas such as **Historic Northside, Polytechnic Heights and Historic Handley** to rapidly developing residential areas across the city. The City of Fort Worth specifically identifies these and other established neighborhoods as areas with their own distinct history and character.',
            'Anytime Plumbing 365 provides **drain cleaning, drain repair, leak detection, emergency plumbing, and water cleanup and restoration throughout Fort Worth**.',
            'A slow drain may only need professional cleaning, while repeated backups can indicate a damaged or obstructed drain or sewer line that needs further investigation and repair. Likewise, unexplained moisture, loss of water pressure, or water appearing around floors or walls may require professional leak detection.',
            'For urgent plumbing problems such as active leaks, overflowing drains, sewer backups, or broken pipes, our team can respond to the plumbing problem and help with resulting water cleanup and restoration.',
        ],
        serviceList: [
            'Clogged drain and main-line cleaning',
            'Drain and sewer repair',
            'Leak detection',
            'Emergency plumbing service',
            'Water damage cleanup and restoration',
        ],
    },
    {
        slug: 'arlington',
        name: 'Arlington',
        communities: [],
        headline: 'Drain Cleaning, Leak Detection & Emergency Plumbing in Arlington',
        paragraphs: [
            'Arlington is a city of diverse residential neighborhoods situated around major destinations including its **Downtown/University District and Entertainment District**, an area the City identifies as a major economic center.',
            'For homeowners, one plumbing problem can quickly lead to another. A backed-up drain may reveal a damaged drain line, while a hidden leak can eventually affect flooring, walls, cabinets, or other building materials.',
            'Anytime Plumbing 365 specializes in **drain cleaning, drain repair, leak detection, emergency plumbing, and water cleanup and restoration in Arlington**.',
            'We can clear clogged kitchen, bathroom, and main drains; investigate recurring drainage problems; locate hidden plumbing leaks; and repair damaged drain or sewer piping. When water is actively entering the home from a broken pipe, overflow, backup, or plumbing failure, we can also help with emergency plumbing and the resulting water cleanup.',
        ],
        serviceList: [
            'Drain cleaning',
            'Drain and sewer repair',
            'Leak detection',
            'Emergency plumbing',
            'Water cleanup and restoration',
        ],
    },
    {
        slug: 'irving',
        name: 'Irving',
        communities: [],
        headline: 'Irving Drain Cleaning, Leak Detection & Water Cleanup',
        paragraphs: [
            "Irving combines established residential neighborhoods with major newer developments such as **Las Colinas**, one of the city's best-known areas and a major corporate center.",
            'Anytime Plumbing 365 provides Irving homeowners with focused services for the problems that can cause some of the greatest disruption to a property: **clogged drains, broken drain lines, hidden plumbing leaks, plumbing emergencies, and water damage**.',
            'Our Irving services include professional **drain cleaning, drain repair, leak detection, emergency plumbing, and water cleanup and restoration**. We can clear a stubborn blockage, investigate a drain that repeatedly backs up, locate an unknown source of water, or evaluate a damaged underground or interior drain line.',
            'If a plumbing leak, overflow, sewer backup, or broken pipe releases water into the property, our team can help address both the plumbing source and the cleanup that follows.',
        ],
        serviceList: [
            'Drain and sewer cleaning',
            'Drain repair',
            'Leak and slab leak detection',
            'Emergency plumbing service',
            'Water cleanup and restoration',
        ],
    },
    {
        slug: 'grand-prairie',
        name: 'Grand Prairie',
        communities: [],
        headline: 'Drain, Sewer, Leak & Emergency Plumbing Services in Grand Prairie',
        paragraphs: [
            'Grand Prairie stretches across a large section of the Metroplex and includes established neighborhoods as well as areas around **Joe Pool Lake**, which lies just south of the city and includes parks operated by Grand Prairie. The city also recognizes more than 60 significant historic landmarks.',
            'Wherever your home is located, plumbing water needs to stay inside the pipe and wastewater needs to move freely away from the property. When either system fails, Anytime Plumbing 365 can help.',
            'We provide **drain cleaning, drain repair, leak detection, emergency plumbing, and water cleanup and restoration in Grand Prairie**.',
            'Our team can clear clogged drains and sewer lines, investigate repeated backups, locate hidden leaks, and repair damaged drain piping. If an overflowing drain, sewer backup, pipe break, or other plumbing emergency sends water into your home, we can also help with the resulting water cleanup and restoration.',
        ],
        serviceList: [
            'Drain cleaning',
            'Sewer and drain repair',
            'Plumbing leak detection',
            'Emergency plumbing',
            'Water damage cleanup and restoration',
        ],
    },
    {
        slug: 'hurst',
        name: 'Hurst',
        communities: [],
        headline: 'Hurst Drain Cleaning, Leak Detection & Emergency Plumbing',
        paragraphs: [
            "Hurst is one of the established **Mid-Cities communities between Dallas and Fort Worth**. The city's early residential development includes the Bellaire area, and Hurst experienced major growth alongside the development of the surrounding Mid-Cities and DFW Airport.",
            'Homes in an established community can experience everything from ordinary drain buildup to aging or damaged drainage piping and difficult-to-locate plumbing leaks.',
            'Anytime Plumbing 365 provides **drain cleaning, drain repair, leak detection, emergency plumbing, and water cleanup and restoration in Hurst**.',
            'If a sink, shower, tub, or main drain is slow or completely stopped, we can determine the appropriate next step. If the same drain continues backing up, we can investigate whether a damaged drain or sewer line may be contributing to the problem.',
            'We also respond to plumbing leaks and urgent water-related problems and can help when the plumbing failure has already caused water damage.',
        ],
        serviceList: [
            'Clogged drain cleaning',
            'Drain-line repair',
            'Leak detection',
            'Emergency plumbing',
            'Water cleanup and restoration',
        ],
    },
    {
        slug: 'euless',
        name: 'Euless',
        communities: [],
        headline: 'Euless Drain Cleaning, Leak Detection & Water Damage Cleanup',
        paragraphs: [
            'Euless grew significantly with the opening of **DFW International Airport in 1974**, helping transform the community into an important part of the Hurst-Euless-Bedford and Mid-Cities area. Today, Anytime Plumbing 365 helps Euless homeowners resolve drainage and plumbing problems before they cause greater damage.',
            'Our primary services are **drain cleaning, drain repair, leak detection, emergency plumbing, and water cleanup and restoration in Euless**.',
            'We can clear clogged kitchen and bathroom drains, address stopped-up main lines, investigate repeated backups, locate hidden plumbing leaks, and repair damaged drain piping. If you discover unexplained water inside the home, identifying and stopping the plumbing source is the first priority.',
            'For active leaks, overflowing drains, broken pipes, or other urgent plumbing problems, our team can also assist with emergency plumbing and resulting water cleanup.',
        ],
        serviceList: [
            'Drain cleaning',
            'Drain and sewer repair',
            'Leak detection',
            'Emergency plumbing',
            'Water cleanup and restoration',
        ],
    },
    {
        slug: 'bedford',
        name: 'Bedford',
        communities: [],
        headline: 'Bedford Drain Cleaning, Drain Repair & Emergency Plumbing',
        paragraphs: [
            "Bedford sits in the heart of the **Mid-Cities between Dallas and Fort Worth**, with a history that reaches back to the 1800s and residential growth that accelerated after World War II. The historic Old Bedford School remains one reminder of the community's long history.",
            'In established homes, recurring drainage or water problems deserve more than a temporary solution.',
            'Anytime Plumbing 365 provides Bedford homeowners with **drain cleaning, drain repair, leak detection, emergency plumbing, and water cleanup and restoration**.',
            'We can clean clogged drains, investigate slow or repeatedly backing-up lines, identify damaged drainage piping, and locate hidden plumbing leaks. If a drain or sewer pipe needs repair rather than another cleaning, we can explain the findings and available repair options.',
            'When a plumbing failure is actively releasing water into the home, our team can also help with emergency plumbing service and water cleanup.',
        ],
        serviceList: [
            'Drain cleaning and clog removal',
            'Drain and sewer repair',
            'Leak detection',
            'Emergency plumbing',
            'Water damage cleanup and restoration',
        ],
    },
    {
        slug: 'north-richland-hills',
        name: 'North Richland Hills',
        communities: [],
        headline: 'North Richland Hills Drain Cleaning & Drain Repair Specialists',
        paragraphs: [
            'North Richland Hills developed from a rural farming and ranching area into a major Northeast Tarrant County community. The historic **Smithfield area** eventually became part of North Richland Hills as the city expanded.',
            'For homeowners, repeated drain backups are one of the clearest signs that a drainage problem deserves a closer look.',
            'Anytime Plumbing 365 provides **drain cleaning, drain repair, leak detection, emergency plumbing, and water cleanup and restoration in North Richland Hills**.',
            'We can start by clearing a clogged line and determining whether the problem appears isolated or recurring. If damaged drain or sewer piping is contributing to repeated backups, we can evaluate repair options rather than simply treating the symptom again.',
            'We also locate hidden plumbing leaks and respond to urgent plumbing failures. If water from a pipe break, drain overflow, or sewer backup has entered the home, our water cleanup and restoration team can help address the affected area.',
        ],
        serviceList: [
            'Drain cleaning',
            'Sewer and drain repair',
            'Leak detection',
            'Emergency plumbing',
            'Water cleanup and restoration',
        ],
    },
    {
        slug: 'haltom-city',
        name: 'Haltom City',
        communities: [],
        headline: 'Emergency Plumbing, Drain Cleaning & Leak Detection in Haltom City',
        paragraphs: [
            'Haltom City is an established Northeast Tarrant County community neighboring Fort Worth, with major corridors including **Loop 820, Highway 121, Denton Highway and Belknap Street**. Portions of historic Birdville also became part of Haltom City as the city developed.',
            'When an older drain line begins failing or an unexpected leak occurs, the problem can quickly affect the rest of the property.',
            'Anytime Plumbing 365 provides **drain cleaning, drain repair, leak detection, emergency plumbing, and water cleanup and restoration in Haltom City**.',
            'We handle clogged and overflowing drains, recurring sewer backups, hidden plumbing leaks, damaged drain lines, and other urgent plumbing situations. When necessary, we can evaluate whether a drain needs cleaning or whether the piping itself needs repair.',
            'And if water from the plumbing problem has reached floors, walls, cabinets, or other areas of the home, we can help with water cleanup and restoration.',
        ],
        serviceList: [
            'Drain cleaning',
            'Drain and sewer repair',
            'Leak detection',
            'Emergency plumbing service',
            'Water cleanup and restoration',
        ],
    },
    {
        slug: 'richland-hills',
        name: 'Richland Hills',
        communities: [],
        headline: 'Richland Hills Drain, Leak & Emergency Plumbing Services',
        paragraphs: [
            'Richland Hills is a compact, established Northeast Tarrant County community of approximately **3.9 square miles**, bordering Fort Worth and conveniently located near Highways 183, 121, 26 and Interstate 820.',
            'Because the city is largely established rather than newly developed, homeowners may encounter plumbing concerns ranging from simple clogged drains to damaged drainage lines and hidden leaks.',
            'Anytime Plumbing 365 provides **drain cleaning, drain repair, leak detection, emergency plumbing, and water cleanup and restoration in Richland Hills**.',
            'We can clear kitchen, bathroom, and main-line blockages; investigate drains that keep backing up; identify leaking plumbing; and repair damaged drain piping when necessary.',
            'For urgent situations involving active water leaks, overflowing drains, or plumbing failures, our team can address the source and help with water cleanup and restoration when the surrounding property has been affected.',
        ],
        serviceList: [
            'Drain cleaning',
            'Drain-line repair',
            'Leak detection',
            'Emergency plumbing',
            'Water cleanup and restoration',
        ],
    },
    {
        slug: 'grapevine',
        name: 'Grapevine',
        communities: [],
        headline: 'Grapevine Drain Cleaning, Leak Detection & Emergency Plumbing',
        paragraphs: [
            'Grapevine is known for its distinctive historic character. The city contains multiple historic districts, including the **Commercial Historic District, Original Town Historic District and Cotton Belt Railroad Historic District**, along with newer residential areas throughout the community.',
            'Different generations of homes can have very different plumbing and drainage systems, which is why correctly identifying the problem is important before deciding on a repair.',
            'Anytime Plumbing 365 provides Grapevine homeowners with **drain cleaning, drain repair, leak detection, emergency plumbing, and water cleanup and restoration**.',
            'We can clear clogged drains and sewer lines, investigate recurring backups, locate concealed plumbing leaks, and repair damaged drainage piping. For active plumbing emergencies such as pipe breaks, overflows, or sewer backups, we can help stop the source.',
            'If the incident has caused water damage, our team can also assist with cleanup and restoration.',
        ],
        serviceList: [
            'Drain and sewer cleaning',
            'Drain repair',
            'Leak and slab leak detection',
            'Emergency plumbing',
            'Water cleanup and restoration',
        ],
    },
    {
        slug: 'farmers-branch',
        name: 'Farmers Branch',
        communities: [],
        headline: 'Farmers Branch Drain Cleaning, Leak Detection & Drain Repair',
        paragraphs: [
            'Farmers Branch has roots reaching back to the **Peters Colony era**, and its Historical Park preserves structures dating from roughly the 1840s through the 1940s.',
            'From long-established neighborhoods to newer properties, plumbing problems often begin with the same warning signs: a drain that keeps slowing down, water appearing unexpectedly, unusual moisture, or a backup that returns after being cleared.',
            'Anytime Plumbing 365 provides **drain cleaning, drain repair, leak detection, emergency plumbing, and water cleanup and restoration throughout Farmers Branch**.',
            'We can remove drain blockages, investigate recurring drain and sewer problems, locate hidden plumbing leaks, and repair damaged piping. When a plumbing problem is actively causing water to enter the property, emergency plumbing service can address the source.',
            'If water has already spread beyond the plumbing system, we can also help with water cleanup and restoration.',
        ],
        serviceList: [
            'Drain cleaning',
            'Sewer and drain repair',
            'Leak detection',
            'Emergency plumbing',
            'Water damage cleanup and restoration',
        ],
    },
    {
        slug: 'carrollton',
        name: 'Carrollton',
        communities: [],
        headline: 'Carrollton Drain Cleaning, Drain Repair & Leak Detection',
        paragraphs: [
            'Carrollton combines established neighborhoods with continued growth around the Metroplex. Its **Historic Downtown Carrollton Square** dates to the early 1900s, when the community grew around several intersecting railroad lines.',
            'Anytime Plumbing 365 helps Carrollton homeowners solve plumbing problems that often begin underground or behind finished surfaces.',
            'We specialize in **drain cleaning, drain repair, leak detection, emergency plumbing, and water cleanup and restoration in Carrollton**.',
            'If a sink, tub, shower, or main drain is clogged, we can clear the blockage and evaluate the line. If the clog repeatedly returns, the next step may be determining whether damage or another condition inside the drain system is causing the recurring problem.',
            'We also locate hidden leaks and respond to plumbing emergencies. If an overflowing drain, sewer backup, broken pipe, or leak damages the property, we can assist with the resulting water cleanup and restoration.',
        ],
        serviceList: [
            'Drain cleaning',
            'Drain and sewer repair',
            'Leak detection',
            'Emergency plumbing',
            'Water cleanup and restoration',
        ],
    },
    {
        slug: 'garland',
        name: 'Garland',
        communities: [],
        headline: 'Garland Drain Cleaning, Leak Detection & Water Cleanup',
        paragraphs: [
            'Garland grew from the early communities of **Duck Creek and Embree**, and its historic downtown commercial district is now listed on the National Register of Historic Places.',
            'That mix of long-established neighborhoods and newer development means Garland homes can contain plumbing systems from many different construction periods.',
            'Anytime Plumbing 365 provides Garland homeowners with **drain cleaning, drain repair, leak detection, emergency plumbing, and water cleanup and restoration**.',
            'We can clear clogged sinks and main drains, investigate recurring sewer or drain backups, identify the source of plumbing leaks, and repair damaged drain lines. If water is actively escaping from a pipe or overflowing from the drainage system, our emergency plumbing team can help address the source.',
            'When the plumbing problem has already affected cabinets, floors, walls, or other areas, we can also provide water cleanup and restoration services.',
        ],
        serviceList: [
            'Drain cleaning',
            'Drain-line and sewer repair',
            'Leak detection',
            'Emergency plumbing',
            'Water damage cleanup and restoration',
        ],
    },
    {
        slug: 'richardson',
        name: 'Richardson',
        communities: [],
        headline: 'Richardson Drain Cleaning, Drain Repair & Leak Detection',
        paragraphs: [
            'Richardson grew rapidly after World War II, and the City reports that **40% of its homes were built during the 1970s**. Today, Richardson is also known for the **Telecom Corridor** and its established residential neighborhoods on both sides of US 75.',
            'For homeowners, that variety in housing age makes proper plumbing diagnosis especially important. A blocked drain may need cleaning, while a line that repeatedly fails may require repair.',
            'Anytime Plumbing 365 specializes in **drain cleaning, drain repair, leak detection, emergency plumbing, and water cleanup and restoration in Richardson**.',
            'We can investigate recurring drain problems, clear blockages, locate hidden plumbing leaks, and evaluate damaged drain or sewer piping. When an active plumbing problem threatens the property, we also provide emergency plumbing assistance.',
            'If water has escaped into the home from a plumbing failure, our team can help with the resulting cleanup and restoration.',
        ],
        serviceList: [
            'Drain cleaning',
            'Drain and sewer-line repair',
            'Leak and slab leak detection',
            'Emergency plumbing',
            'Water cleanup and restoration',
        ],
    },
    {
        slug: 'plano',
        name: 'Plano',
        communities: [],
        headline: 'Plano Drain Cleaning, Leak Detection & Emergency Plumbing',
        paragraphs: [
            'Plano has grown dramatically from its early farming-community roots, but **Historic Downtown Plano** still preserves buildings and a street pattern dating back more than a century. The City recognizes two heritage districts and dozens of heritage landmarks.',
            'With both long-established and newer residential neighborhoods, Plano homeowners can encounter very different plumbing problems depending on the property.',
            'Anytime Plumbing 365 provides **drain cleaning, drain repair, leak detection, emergency plumbing, and water cleanup and restoration throughout Plano**.',
            'We can clear clogged drains, troubleshoot recurring main-line or sewer backups, find hidden plumbing leaks, and repair damaged drain piping. When water is actively escaping from the plumbing system or wastewater is backing up into the home, fast action can reduce additional damage.',
            'Our team can address the plumbing source and provide water cleanup and restoration when needed.',
        ],
        serviceList: [
            'Drain cleaning',
            'Sewer and drain repair',
            'Leak detection',
            'Emergency plumbing',
            'Water cleanup and restoration',
        ],
    },
    {
        slug: 'mesquite',
        name: 'Mesquite',
        communities: [],
        headline: 'Mesquite Drain Cleaning, Drain Repair & Emergency Plumbing',
        paragraphs: [
            'Mesquite began as a **Texas & Pacific Railway depot town in 1873** and later experienced major residential growth during the post-World War II suburban expansion. Today the city describes itself as the **Rodeo Capital of Texas** and continues to add new residential development while retaining many established neighborhoods.',
            'Anytime Plumbing 365 provides Mesquite homeowners with **drain cleaning, drain repair, leak detection, emergency plumbing, and water cleanup and restoration**.',
            'If a drain is slow, completely blocked, or repeatedly backing up, we can determine whether professional drain cleaning is enough or whether the underlying drain or sewer line requires further repair.',
            'We also locate hidden plumbing leaks and respond to active plumbing emergencies including broken lines, overflows, and backups. If the plumbing problem has already caused water damage inside the home, our team can help with water cleanup and restoration as well.',
        ],
        serviceList: [
            'Drain cleaning',
            'Drain and sewer-line repair',
            'Leak detection',
            'Emergency plumbing',
            'Water damage cleanup and restoration',
        ],
    },
];

export function getCityBySlug(slug) {
    return cities.find((c) => c.slug === slug);
}

export function getCommunity(citySlug, communitySlug) {
    const city = getCityBySlug(citySlug);
    if (!city) return null;
    const community = city.communities.find((cm) => cm.slug === communitySlug);
    return community ? { city, community } : null;
}

export function getAllCitySlugs() {
    return cities.map((c) => c.slug);
}

export function getAllCityCommunityParams() {
    return cities.flatMap((c) => c.communities.map((cm) => ({ city: c.slug, community: cm.slug })));
}
