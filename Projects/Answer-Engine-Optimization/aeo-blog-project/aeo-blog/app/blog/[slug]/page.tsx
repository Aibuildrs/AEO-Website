import { getArticle, getArticleSlugs } from "@/app/lib/sanity.client";
import { imageUrlBuilder } from "@/app/lib/sanity.image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Article, FAQ } from "@/app/types/article";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

export async function generateStaticParams() {
  const slugs: string[] = await getArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = (await getArticle(slug)) as Article;

  if (!article) {
    return { title: "Article Not Found" };
  }

  const imageUrl = article.featuredImage
    ? imageUrlBuilder(article.featuredImage).width(1200).height(630).url()
    : undefined;

  return {
    title: article.title,
    description: article.metaDescription || article.excerpt,
    keywords: article.keyword,
    openGraph: {
      title: article.title,
      description: article.metaDescription || article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      images: imageUrl
        ? [{ url: imageUrl, alt: article.featuredImage?.alt }]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.metaDescription || article.excerpt,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = (await getArticle(slug)) as Article;

  if (!article) {
    notFound();
  }

  const imageUrl = article.featuredImage
    ? imageUrlBuilder(article.featuredImage).width(1200).height(630).url()
    : undefined;

  const imageAlt = article.featuredImage?.alt;
  const imageCaption = article.featuredImage?.caption;

  // JSON-LD schemas inside ArticlePage.tsx
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://theaeoengine.com/#organization",
    name: "The AEO Engine",
    url: "https://theaeoengine.com",
    logo: {
      "@type": "ImageObject",
      url: "https://theaeoengine.com/logo.png",
    },
    description:
      "Answer Engine Optimization (AEO) services for AI-driven search visibility and content optimization.",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: article.title || "Digital Marketing Service",
    serviceType: "Answer Engine Optimization",
    provider: {
      "@id": "https://theaeoengine.com/#organization",
    },
    areaServed: ["US", "UK", "KENYA", "INDIA"],
    audience: {
      "@type": "Audience",
      audienceType: "Tech-Savvy Marketing Leaders",
    },
    description:
      "Optimization services for AI search visibility and content authority.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://theaeoengine.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://theaeoengine.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `https://theaeoengine.com/blog/${article.slug}`,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `https://theaeoengine.com/blog/${article.slug}#article`,
    headline: article.title,
    description: article.metaDescription || article.excerpt,
    image: article.featuredImage
      ? {
          "@type": "ImageObject",
          url: imageUrlBuilder(article.featuredImage)
            .width(1200)
            .height(630)
            .url(),
          width: 1200,
          height: 630,
          caption:
            article.featuredImage.caption ||
            article.featuredImage.alt ||
            "Featured image",
          alternateName:
            article.featuredImage.alt || "Featured image for the article",
          author: {
            "@type": "Organization",
            "@id": "https://theaeoengine.com/#organization",
          },
        }
      : undefined,
    author: {
      "@type": "Organization",
      "@id": "https://theaeoengine.com/#organization",
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://theaeoengine.com/#organization",
      logo: {
        "@type": "ImageObject",
        url: "https://theaeoengine.com/logo.png",
      },
    },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    inLanguage: "en-US",
    about: { "@type": "ProfessionalService", name: article.title },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://theaeoengine.com/blog/${article.slug}`,
    },
    keywords: article.keyword || [],
    articleSection: article.categories?.[0] || "",
    wordCount: article.wordCount || 0,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity:
      article.faqs?.map(({ question, answer }: FAQ) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })) || [],
  };

  // ------------------------------
  // Render
  // ------------------------------

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Article Content */}
      <article
        className="min-h-screen bg-slate-100/50"
        itemScope
        itemType="https://schema.org/Article"
      >
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <header className="mb-8">
              {article.categories && article.categories.length > 0 && (
                <div className="flex gap-2 mb-4">
                  {article.categories.map((category) => (
                    <span
                      key={category}
                      className="text-sm font-medium text-blue-700 bg-blue-50 px-3 py-1 rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              )}

              <h1
                className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-20"
                itemProp="headline"
              >
                {article.title}
              </h1>
              <div className="flex flex-wrap items-center gap-x-1 gap-y-2 text-xs sm:text-sm text-slate-400 font-medium mt-5 mb-5">
                <Breadcrumbs
                  items={[
                    { name: "Blogs", url: "/blog" },                   
                    { name: article.title, url: `/blog/${article.slug}` },
                  ]}
                  article={{
                    readingTime: article.readingTime,
                    wordCount: article.wordCount,
                  }}
                />
              </div>

              {article.excerpt && (
                <p className="text-xl text-gray-700 leading-relaxed">
                  {article.excerpt}
                </p>
              )}
            </header>

            {/* Featured Image */}
            {article.featuredImage && (
              <figure className="w-full mb-8 rounded-lg overflow-hidden">
                {imageUrl && (
                  <Image
                    src={imageUrl}
                    alt={imageAlt || "Featured image"}
                    width={1200}
                    height={630}
                    priority
                    className="w-full h-auto object-cover rounded-lg"
                  />
                )}
                {imageCaption && (
                  <figcaption className="bg-black bg-opacity-70 text-white text-sm p-3">
                    {imageCaption}
                  </figcaption>
                )}
              </figure>
            )}

            {/* Article Content */}
            <div className="prose prose-lg max-w-none" itemProp="articleBody">
              <PortableText
                value={article.content}
                components={portableTextComponents}
              />
            </div>

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">
                  Tags:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {article.faqs && article.faqs.length > 0 && (
              <section className="mt-12 pt-8 border-t">
                <h2 className="text-3xl font-bold mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {article.faqs.map((faq, i) => (
                    <div key={i}>
                      <h3 className="font-semibold">{faq.question}</h3>
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Related Articles */}
            {article.relatedArticles && article.relatedArticles.length > 0 && (
              <div className="mt-16 pt-8 border-t">
                <h2 className="text-3xl font-bold mb-6">Related Articles</h2>
                <div className="grid gap-6 md:grid-cols-3">
                  {article.relatedArticles.map((related) => (
                    <Link
                      key={related._id}
                      href={`/blog/${related.slug}`}
                      className="group block bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      {related.featuredImage && (
                        <div className="relative h-40 w-full">
                          <Image
                            src={imageUrlBuilder(related.featuredImage)
                              .width(400)
                              .height(300)
                              .url()}
                            alt={related.featuredImage.alt}
                            width={400}
                            height={300}
                            className="object-cover group-hover:scale-105 transition-transform"
                            priority={false}
                          />
                        </div>
                      )}
                      <div className="p-4">
                        <h3 className="font-semibold mb-2 group-hover:text-blue-700 transition-colors line-clamp-2">
                          {related.title}
                        </h3>
                        {related.excerpt && (
                          <p className="text-sm text-gray-600 line-clamp-2">
                            {related.excerpt}
                          </p>
                        )}
                        <span className="text-xs text-slate-400">
                          {new Date(related.publishedAt).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            }
                          )}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>
    </>
  );
}

const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold mt-6 mb-3">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-bold mt-4 mb-2">{children}</h4>
    ),
    normal: ({ children }) => (
      <p className="mb-4 leading-relaxed">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-600 pl-6 my-6 italic text-gray-700">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const target = value?.blank ? "_blank" : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className="text-blue-700 hover:text-blue-800 underline font-medium"
        >
          {children}
        </a>
      );
    },
    internalLink: ({ children, value }) => (
      <Link
        href={`/blog/${value?.reference?.slug?.current}`}
        className="text-blue-700 hover:text-blue-800 underline font-medium"
      >
        {children}
      </Link>
    ),
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">
        {children}
      </code>
    ),
  },
};
