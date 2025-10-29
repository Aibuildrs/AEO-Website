"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, MoveRight} from "lucide-react";
import { getArticles } from "@/app/lib/sanity.client";
import { getOptimizedImageUrl } from "@/app/lib/sanity.image";
import { Article } from "@/app/types/article";

const BlogCard: React.FC<{ post: Article }> = ({ post }) => {
  const imageUrl = post.featuredImage
    ? getOptimizedImageUrl(post.featuredImage, 800)
    : "/assets/statistics.webp"; // fallback image

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full border border-gray-100 w-full">
      {/* Image */}
      <div className="relative w-full h-56 bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
        <Image
          src={imageUrl}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-5">
        {/* Meta Info */}
        <div className="flex items-center justify-between text-sm text-gray-600 mb-3 gap-2 w-full overflow-visible">
          <div className="flex items-center gap-1.5 whitespace-nowrap">
            <Calendar className="w-4 h-4 flex-shrink-0" />
            {post.publishedAt && (
              <span>
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            )}
          </div>

          {post.readingTime && (
            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <Clock className="w-4 h-4 flex-shrink-0" />
              <span>{post.readingTime} min read</span>
            </div>
          )}

          <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium border border-blue-200 whitespace-nowrap flex-shrink-0">
            {post.categories?.[0] || "General"}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 leading-relaxed mb-5 flex-grow line-clamp-3">
          {post.excerpt}
        </p>

        {/* Read More */}
        <Link
          href={`/blog/${post.slug}`}
          className="flex items-center justify-between text-blue-600 font-medium hover:gap-2 transition-all"
        >
          <span className="text-slate-900 whitespace-nowrap">Read More</span>
          <MoveRight className="w-8 h-8 text-blue-500" />
        </Link>
      </div>
    </div>
  );
};

export default function BlogPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const data = await getArticles();

        // Sort by newest first
        const sorted = data.sort(
          (a: Article, b: Article) =>
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime()
        );

        setArticles(sorted);
      } catch (error) {
        console.error("Failed to load articles:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchArticles();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-16 max-w-7xl mt-8 mb-6">
        {/* Blog Grid */}
        {loading ? (
          <div className="text-center text-gray-500 py-10">
            Loading posts...
          </div>
        ) : articles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-10">
            No blog posts found.
          </div>
        )}
      </main>
    </div>
  );
}
