export default function ArticleLoading() {
    return (
      <article className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4 mb-8">
              <div className="h-6 bg-gray-200 rounded w-32 animate-pulse"></div>
              <div className="h-16 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-64 animate-pulse"></div>
            </div>
            <div className="h-96 bg-gray-200 rounded-lg mb-8 animate-pulse"></div>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-4 bg-gray-200 rounded animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>
      </article>
    )
  }