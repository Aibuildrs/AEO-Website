'use client'

import { useEffect } from "react"

export default function BlogError({
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
          Failed to load articles
        </h2>
        <p className="text-gray-600 mb-6">
          There was a problem connecting to our content service.
        </p>
        <button
          onClick={reset}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  )
}