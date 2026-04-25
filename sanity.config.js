import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schema } from './sanity/schema'
import { projectId, dataset } from './sanity/env'

import { structure } from './sanity/lib/structure'

import { presentationTool } from 'sanity/presentation'
import { DeployTool } from './sanity/components/DeployTool'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({
      structure,
    }),
    {
      name: 'deploy-tool',
      title: 'Push to Live',
      component: DeployTool,
    },
    presentationTool({
      resolve: {
        locations: {
          homepage: (doc, context) => ({
            locations: [
              {
                title: 'Home',
                href: '/',
              },
            ],
          }),
          service: (doc, context) => ({
            locations: [
              {
                title: doc.title || 'Service',
                href: `/service/${doc.slug?.current}`,
              },
            ],
          }),
          settings: (doc, context) => ({
            locations: [
              {
                title: 'Home',
                href: '/',
              },
            ],
          }),
        },
      },
      previewUrl: {
        origin: typeof window !== 'undefined' && window.location.hostname !== 'localhost' 
          ? window.location.origin 
          : 'http://localhost:3000',
        previewMode: {
          enable: '/api/draft-mode/enable',
        },
      },
      navigator: {},
    }),
    visionTool({ defaultApiVersion: '2024-04-24' }),
  ],
})
