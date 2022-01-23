import { defineSchema } from '@tinacms/cli'

export default defineSchema({
  collections: [
    {
      label: 'Blog Posts',
      name: 'posts',
      path: 'content/posts',
      fields: [
        {
          type: 'string',
          label: 'Title',
          name: 'title',
        },
        {
          type: 'string',
          label: 'Blog Post Body',
          name: 'body',
          isBody: true,
          ui: {
            component: 'textarea',
          },
        },
      ],
    },
    {
      label: 'Page Content',
      name: 'pages',
      path: 'content/pages',
      fields: [
        {
          label: 'SEO Data',
          name: 'seo_data',
          type: 'object',
          fields: [
            {
              type: 'string',
              label: 'Meta Title',
              name: 'meta_title',
            },
            {
              type: 'string',
              label: 'Meta Description',
              name: 'meta_description',
            },
            {
              type: 'string',
              label: 'Canonical URL',
              name: 'meta_description',
            },
          ],
        },
        {
          label: 'Hero Section',
          name: 'hero',
          type: 'object',
          fields: [
            {
              type: 'string',
              label: 'Main Heading',
              name: 'hero_heading',
            },
            {
              type: 'string',
              label: 'Meta Description',
              name: 'hero_description',
            },
            {
              type: 'string',
              label: 'Canonical URL',
              name: 'meta_description',
            },
          ],
        },
      ],
    },
  ],
})

const HomePageForm = {
  label: 'Home Page',
  fields: [{}],
}
