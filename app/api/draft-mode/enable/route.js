import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get('slug')
  
  ;(await draftMode()).enable()
  
  if (slug) {
    redirect(slug)
  }
  
  redirect('/')
}
