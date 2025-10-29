'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function ArticleError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error) 
  }, [error])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h2 className="text-3xl font-bold text-red-600 mb-4">
          Failed to load article
        </h2>
        <p className="text-gray-600 mb-6">
          This article couldn&apos;t be loaded. It may have been removed or
          there&apos;s a connection issue.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Try again
          </button>
          <Link
            href="/blog"
            className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Back to blog
          </Link>
        </div>
      </div>
    </div>
  )
}
