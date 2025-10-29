import {defineField, defineType} from 'sanity'
import {DocumentIcon} from '@sanity/icons'

export default defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    // ===== BASIC INFORMATION =====
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(60),
      description: 'SEO-optimized title (60 characters max)',
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, ''),
      },
      validation: (Rule) => Rule.required(),
      description: 'URL-friendly version of title',
    }),

    defineField({
      name: 'keyword',
      title: 'Target Keyword',
      type: 'string',
      description: 'Primary keyword for SEO',
    }),

    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(200),
      description: 'Short summary (200 characters max)',
    }),

    // ===== MAIN CONTENT =====
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
            {title: 'Quote', value: 'blockquote'},
          ],
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Numbered', value: 'number'},
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Code', value: 'code'},
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'External Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    validation: (Rule) =>
                      Rule.uri({
                        scheme: ['http', 'https', 'mailto', 'tel'],
                      }),
                  },
                  {
                    name: 'blank',
                    type: 'boolean',
                    title: 'Open in new tab',
                    initialValue: false,
                  },
                ],
              },
              {
                name: 'internalLink',
                type: 'object',
                title: 'Internal Link',
                fields: [
                  {
                    name: 'reference',
                    type: 'reference',
                    title: 'Reference',
                    to: [{type: 'article'}],
                  },
                ],
              },
            ],
          },
        },
      ],
    }),

    // ===== SEO =====
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(160),
      description: 'SEO meta description (160 characters max)',
    }),

    // ===== FEATURED IMAGE =====
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          validation: (Rule) => Rule.required(),
          description: 'Describe the image for accessibility',
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          description: 'Optional caption displayed below image',
        },
      ],
    }),

    // ===== SCHEMA & STRUCTURED DATA =====
    defineField({
      name: 'schemaMarkup',
      title: 'Schema Markup (JSON-LD)',
      type: 'text',
      rows: 10,
      description: 'Auto-generated schema.org markup from N8N',
    }),

    // ===== FAQ SCHEMA =====
    defineField({
      name: 'faqSchema',
      title: 'FAQ Schema (JSON-LD)',
      type: 'text',
      rows: 10,
      description: 'Optional FAQ schema markup in JSON format',
    }),

    // ===== RELATED ENTITIES =====
    defineField({
      name: 'entities',
      title: 'Entities',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of related entities or subtopics',
    }),

    // ===== METADATA =====
    defineField({
      name: 'wordCount',
      title: 'Word Count',
      type: 'number',
      readOnly: true,
      description: 'Automatically calculated',
    }),

    defineField({
      name: 'readingTime',
      title: 'Reading Time (minutes)',
      type: 'number',
      readOnly: true,
      description: 'Estimated reading time',
    }),

    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
      initialValue: () => new Date().toISOString(),
    }),

    defineField({
      name: 'updatedAt',
      title: 'Updated At',
      type: 'datetime',
    }),

    // ===== AIRTABLE INTEGRATION =====
    defineField({
      name: 'airtableRecordId',
      title: 'Airtable Record ID',
      type: 'string',
      hidden: true,
      description: 'Links back to Airtable keyword record',
    }),

    defineField({
      name: 'qualityScore',
      title: 'Quality Score',
      type: 'number',
      hidden: true,
      description: 'AI quality score from generation',
    }),

    // ===== ENTITY DATA =====
    defineField({
      name: 'primaryEntity',
      title: 'Primary Entity',
      type: 'string',
      description: 'Main topic/entity discussed',
    }),

    defineField({
      name: 'entityType',
      title: 'Entity Type',
      type: 'string',
      options: {
        list: [
          {title: 'Service', value: 'Service'},
          {title: 'Product', value: 'Product'},
          {title: 'Concept', value: 'Concept'},
          {title: 'Organization', value: 'Organization'},
          {title: 'Person', value: 'Person'},
          {title: 'Location', value: 'Location'},
        ],
      },
    }),

    // ===== CATEGORIES & TAGS =====
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'How-To Guide', value: 'how-to'},
          {title: 'Tutorial', value: 'tutorial'},
          {title: 'Best Practices', value: 'best-practices'},
          {title: 'Industry Insights', value: 'insights'},
          {title: 'Case Study', value: 'case-study'},
          {title: 'News & Updates', value: 'news'},
        ],
      },
    }),

    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    }),

    // ===== STATUS =====
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: '✅ Published', value: 'published'},
          {title: '📝 Draft', value: 'draft'},
          {title: '🔒 Archived', value: 'archived'},
        ],
      },
      initialValue: 'published',
      validation: (Rule) => Rule.required(),
    }),
  ],

  // Preview configuration
  preview: {
    select: {
      title: 'title',
      subtitle: 'keyword',
      media: 'featuredImage',
      publishedAt: 'publishedAt',
      status: 'status',
    },
    prepare(selection) {
      const {title, subtitle, media, publishedAt, status} = selection
      const date = publishedAt ? new Date(publishedAt).toLocaleDateString() : 'No date'

      return {
        title: title,
        subtitle: `${subtitle || ''} • ${date} • ${status}`,
        media: media,
      }
    },
  },
})
