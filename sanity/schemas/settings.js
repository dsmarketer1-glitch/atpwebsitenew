export default {
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
      initialValue: '214-307-4264',
    },
    {
      name: 'licenseNumber',
      title: 'License Number',
      type: 'string',
      initialValue: '37912',
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        { name: 'facebook', type: 'url', title: 'Facebook URL' },
        { name: 'instagram', type: 'url', title: 'Instagram URL' },
        { name: 'youtube', type: 'url', title: 'YouTube URL' },
        { name: 'yelp', type: 'url', title: 'Yelp URL' },
      ]
    }
  ],
}
