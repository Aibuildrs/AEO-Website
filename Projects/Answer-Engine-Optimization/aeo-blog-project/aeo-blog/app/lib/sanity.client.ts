import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01",
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_TOKEN,
  perspective: "published",
});
// ====================
// QUERY FUNCTIONS
// ====================

/**
 * Fetch all published articles
 */
export async function getArticles() {
  return client.fetch(
    `*[_type == "article" && status == "published"] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      keyword,
      featuredImage {
        asset->{
          url
        },
        alt,
        caption
      },
      publishedAt,
      wordCount,
      readingTime,
      categories,
      tags,
      primaryEntity
    }`
  );
}

/**
 * Fetch single article by slug
 */
export async function getArticle(slug: string) {
  return client.fetch(
    `*[_type == "article" && slug.current == $slug && status == "published"][0] {
      _id,
      title,
      "slug": slug.current,
      keyword,
      excerpt,
      content,
      featuredImage {
        asset->{
          url
        },
        alt,
        caption
      },
      metaDescription,
      schemaMarkup,
      faqSchema,
      wordCount,
      readingTime,
      publishedAt,
      updatedAt,
      primaryEntity,
      entities,
      entityType,
      categories,
      tags,
      "relatedArticles": *[
        _type == "article" && 
        status == "published" && 
        slug.current != $slug &&
        count((categories[])[@ in ^.categories[]]) > 0
      ] | order(publishedAt desc) [0...3] {
        _id,
        title,
        "slug": slug.current,
        excerpt,
        featuredImage {
          asset->{
            url
          },
          alt,
          caption
        },
        publishedAt
      }
    }`,
    { slug }
  );
}

/**
 * Get all article slugs for static generation
 */
export async function getArticleSlugs() {
  return client.fetch(
    `*[_type == "article" && status == "published"].slug.current`
  );
}
