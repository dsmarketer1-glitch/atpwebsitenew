import { createClient } from 'next-sanity'
import { NextResponse } from 'next/server'
import { projectId, dataset, token } from '@/sanity/env'

export async function POST() {
  if (!token) {
    return NextResponse.json({ error: 'No write token configured' }, { status: 500 })
  }

  const client = createClient({
    projectId,
    dataset,
    token,
    useCdn: false,
    apiVersion: '2024-04-24',
  })

  try {
    // 1. Fetch all draft documents
    const drafts = await client.fetch(`*[_id in path("drafts.**")]`)
    
    if (drafts.length === 0) {
      return NextResponse.json({ message: 'No drafts found to publish' })
    }

    // 2. Create a transaction to publish all
    const transaction = client.transaction()
    
    drafts.forEach((draft) => {
      const publishedId = draft._id.replace('drafts.', '')
      const { _id, ...fields } = draft
      
      // Update or create the published version
      transaction.createOrReplace({
        ...fields,
        _id: publishedId,
      })
      
      // Delete the draft version
      transaction.delete(_id)
    })

    await transaction.commit()

    return NextResponse.json({ 
      message: `Successfully published ${drafts.length} documents`,
      count: drafts.length 
    })
  } catch (error) {
    console.error('Publish all error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
