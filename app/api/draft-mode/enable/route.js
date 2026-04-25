import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get('slug') || '/'
  
  // Enable Draft Mode by setting the cookie
  ;(await draftMode()).enable()
  
  // Redirect to the path from the "slug" parameter or fallback to the root
  redirect(slug)
}
