import { draftMode } from 'next/headers'
import { client } from './client'
import { token } from '../env'

export async function sanityFetch({ query, params = {}, tags = [] }) {
  const isDraftMode = (await draftMode()).isEnabled

  return client.fetch(query, params, {
    ...(isDraftMode && {
      token: token,
      perspective: 'previewDrafts',
    }),
    next: {
      revalidate: isDraftMode ? 0 : 0, // Set to 0 to ensure fresh data on every rebuild/request
      tags,
    },
  })
}
