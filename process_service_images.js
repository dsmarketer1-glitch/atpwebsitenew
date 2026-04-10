const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'Service photos for Website');
const destDir = path.join(__dirname, 'public', 'images', 'service', 'actual');

// ensure dest exists
if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

function traverse(dir) {
    let results = [];
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            results = results.concat(traverse(fullPath));
        } else {
            results.push(fullPath);
        }
    }
    return results;
}

const allFiles = traverse(srcDir);
const mappings = {};

for (const file of allFiles) {
    if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
        const basename = path.basename(file);
        const nameWithoutExt = path.parse(basename).name;
        // Basic slugify: lowercase, replace spaces and special chars with hyphens
        const slug = nameWithoutExt.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        const newName = slug + path.extname(file);
        
        const destPath = path.join(destDir, newName);
        fs.copyFileSync(file, destPath);
        mappings[nameWithoutExt] = `/images/service/actual/${newName}`;
        console.log(`Copied: ${basename} -> ${newName}`);
    }
}

console.log('Mapping dictionary =', mappings);

// Update data/services.js
const servicesPath = path.join(__dirname, 'data', 'services.js');
let servicesContent = fs.readFileSync(servicesPath, 'utf8');

// The keys we have in mapping are things like 'drain-cleaning', 'water-heater-repair'
// We might not perfectly match the slug from data/services.js, so let's do a rough match

// E.g. 'Toilet Repair.png' -> 'toilet-repair' -> maps to slug 'toilet-repair-installation'
// E.g. 'Slab Leak Detection.png' -> 'slab-leak-detection' -> maps to slug 'slab-leak-detection-repair'

const slugMapping = {
    'drain-cleaning': 'drain-cleaning',
    'drain-pipe-repair': 'drain-pipe-repair',
    'emergency-plumber': 'emergency-plumber',
    'home-repiping': 'home-repiping',
    'hydrojetting': 'hydro-jetting', // Note: filename might be Hydrojetting.png
    'hydro-jetting': 'hydro-jetting',
    'plumbing-repair': 'plumbing-repair',
    'rooter-services': 'rooter-services',
    'sewage-cleanup': 'sewage-cleanup',
    'sewer-line-repair': 'sewer-line-repair',
    'slab-leak-detection': 'slab-leak-detection-repair',
    'toilet-repair': 'toilet-repair-installation',
    'water-damage-restoration': 'water-damage-restoration',
    'water-heater-repair': 'water-heater-repair',
    'water-leak-detection': 'water-leak-detection-repair'
};

const newImagePathsBySlug = {};
for (const [originalName, newPath] of Object.entries(mappings)) {
    const roughSlug = originalName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    let actualSlug = slugMapping[roughSlug] || roughSlug;
    newImagePathsBySlug[actualSlug] = newPath;
}

console.log('New image paths by slug =', newImagePathsBySlug);

// Now update data/services.js
// It looks like:
// { slug: 'drain-cleaning', ..., image: 'https://placehold.co/800x600/png' }
// We can use eval or regex. Regex is safer to just modify the string inplace.

let updatedServices = servicesContent;

Object.keys(newImagePathsBySlug).forEach(slug => {
    const imgPath = newImagePathsBySlug[slug];
    // Find the block for this slug.
    // E.g., `slug: 'drain-cleaning',[\s\S]*?image: 'https://placehold.co/800x600/png'`
    // Oh wait, the image property comes after slug.
    
    // We can do this safely by matching slug: 'slug-name', then finding the first image: '...'
    const regex = new RegExp(`(slug:\\s*['"]${slug}['"][\\s\\S]*?image:\\s*['"])[^'"]+(['"])`, "g");
    updatedServices = updatedServices.replace(regex, `$1${imgPath}$2`);
});

fs.writeFileSync(servicesPath, updatedServices, 'utf8');
console.log('Updated data/services.js');
