import { client } from './client'

export async function sanityFetch({ query, params = {}, tags = [] }) {
  return client.fetch(query, params, {
    next: {
      revalidate: process.env.NODE_ENV === 'development' ? 30 : 3600,
      tags,
    },
  })
}
