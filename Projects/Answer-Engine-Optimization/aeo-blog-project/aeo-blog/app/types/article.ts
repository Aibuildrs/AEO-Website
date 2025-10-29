import { PortableTextBlock } from '@portabletext/react'

export interface FAQ {
  question: string
  answer: string
}

export interface RelatedArticle {
  _id: string
  title: string
  slug: string
  excerpt?: string
  featuredImage?: Article['featuredImage']
  publishedAt: string
}

export interface Article {
  _id: string
  title: string
  slug: string
  keyword?: string
  excerpt?: string
  content: PortableTextBlock[]
  featuredImage?: {
    asset: { _ref: string; _type: 'reference' }
    alt: string
    caption?: string
  }
  metaDescription?: string
  schemaMarkup?: string
  wordCount?: number
  readingTime?: number
  publishedAt: string
  updatedAt?: string
  primaryEntity?: string
  entityType?: string
  categories?: string[]
  tags?: string[]
  relatedArticles?: RelatedArticle[]
  faqs?: FAQ[] 
}

export interface ArticleListItem {
  _id: string
  title: string
  slug: string
  excerpt?: string
  keyword?: string
  featuredImage?: Article['featuredImage']
  publishedAt: string
  wordCount?: number
  readingTime?: number
  categories?: string[]
  tags?: string[]
}
