import { NextRequest, NextResponse } from 'next/server'
// import { searchArticles } from "@/app/lib/sanity.client";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get('q')
  
  if (!query) {
    return NextResponse.json({ error: 'Query required' }, { status: 400 })
  }

//   const results = await searchArticles(query)
  
//   return NextResponse.json({ results })
}