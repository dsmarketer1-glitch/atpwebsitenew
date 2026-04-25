// This script will seed your Sanity project with the initial data from data/services.js
// You need a Sanity write token to run this.
// Usage: SANITY_AUTH_TOKEN=your_token node seed-sanity.js

const { createClient } = require('@sanity/client');
const { services } = require('./data/services');

const client = createClient({
  projectId: '6f33ptjc',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_AUTH_TOKEN,
  apiVersion: '2024-04-24',
});

async function seedServices() {
  console.log('Seeding services...');
  for (const service of services) {
    const doc = {
      _type: 'service',
      _id: `service-${service.slug}`,
      title: service.title,
      slug: { _type: 'slug', current: service.slug },
      heroTitle: service.heroTitle,
      metaTitle: service.metaTitle,
      metaDescription: service.metaDescription,
      shortDescription: service.shortDescription,
      content: service.content,
      features: service.features,
      faqs: service.faqs?.map((faq, index) => ({
        _key: `faq-${index}`,
        question: faq.question,
        answer: faq.answer,
      })),
      // Images need to be uploaded separately, we'll skip for now or provide placeholders
      imageAlt: service.imageAlt,
    };

    try {
      await client.createOrReplace(doc);
      console.log(`✅ Created/Updated service: ${service.title}`);
    } catch (err) {
      console.error(`❌ Failed to create service ${service.title}:`, err.message);
    }
  }
}

async function seedSettings() {
    console.log('Seeding settings...');
    const settingsDoc = {
        _type: 'settings',
        _id: 'settings',
        phoneNumber: '214-307-4264',
        licenseNumber: '37912',
    };
    try {
        await client.createOrReplace(settingsDoc);
        console.log('✅ Created/Updated settings');
    } catch (err) {
        console.error('❌ Failed to create settings:', err.message);
    }
}

async function run() {
  if (!process.env.SANITY_AUTH_TOKEN) {
    console.error('Please provide a SANITY_AUTH_TOKEN environment variable.');
    process.exit(1);
  }
  await seedServices();
  await seedSettings();
  console.log('Seeding complete!');
}

run();
