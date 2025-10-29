import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  // Check for secret to confirm this is a valid request
  const secret = request.nextUrl.searchParams.get('secret')
  
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  try {
    // Get slug from request body (optional)
    const body = await request.json().catch(() => ({}))
    const slug = body.slug

    if (slug) {
      // Revalidate specific article
      revalidatePath(`/blog/${slug}`)
      console.log(`Revalidated: /blog/${slug}`)
    }

    // Always revalidate blog list
    revalidatePath('/blog')
    console.log('Revalidated: /blog')

    return NextResponse.json({ 
      revalidated: true, 
      paths: slug ? [`/blog/${slug}`, '/blog'] : ['/blog'],
      now: Date.now() 
    })
  } catch (error) {
    console.error('Revalidation error:', error)
    return NextResponse.json(
      { message: 'Error revalidating' },
      { status: 500 }
    )
  }
}