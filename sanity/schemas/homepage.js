export default {
  name: 'homepage',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'heroLabel',
      title: 'Hero Label',
      type: 'string',
      initialValue: 'Trusted Plumbing Experts Since Day One',
    },
    {
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      initialValue: 'Professional Plumbing & Restoration in Dallas, TX',
    },
    {
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      initialValue: 'Licensed experts delivering fast, honest plumbing solutions — 24 hours a day, 7 days a week.',
    },
    {
        name: 'heroImage',
        title: 'Hero Image',
        type: 'image',
        options: { hotspot: true }
    },
    {
      name: 'trustStats',
      title: 'Trust Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Label' },
            { name: 'value', type: 'string', title: 'Value (Number)' },
            { name: 'suffix', type: 'string', title: 'Suffix (e.g. % or /7)' },
          ]
        }
      ]
    },
    {
      name: 'whyChooseUs',
      title: 'Why Choose Us',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'icon', type: 'string', title: 'Emoji Icon' },
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'description', type: 'text', title: 'Description' },
          ]
        }
      ]
    }
  ],
}
