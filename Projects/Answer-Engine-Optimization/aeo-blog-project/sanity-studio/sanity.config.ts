import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'aeo-content-pipeline',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '09vr5i3l',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  basePath: process.env.SANITY_BASE_PATH || '/',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  // Add API token for authenticated requests
  api: {
    token: process.env.SANITY_API_TOKEN,
    useCdn: false, 
  },
})
