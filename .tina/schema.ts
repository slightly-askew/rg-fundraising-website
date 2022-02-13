import { defineSchema } from '@tinacms/cli'
import {
  callToActionBlock,
  meetTheTeamBlock,
  ourServicesBlock,
  poweredByDataBlock,
  whoWeWorkWithBlock,
  whyRgBlock,
} from './blocks'

export default defineSchema({
  collections: [
    {
      label: 'Page Content',
      name: 'page',
      path: 'content/page',
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
              name: 'meta_canonical',
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
              label: 'Heading',
              name: 'hero_heading',
            },
            {
              type: 'string',
              label: 'Intro text',
              name: 'hero_description',
            },
            {
              type: 'string',
              label: 'Button text',
              name: 'hero_button_text',
            },
          ],
        },
        {
          type: 'object',
          list: true,
          name: 'blocks',
          label: 'Content Sections',
          templates: [
            //@ts-expect-error caused by using variable instead of typing inline
            callToActionBlock,
            //@ts-expect-error caused by using variable instead of typing inline
            meetTheTeamBlock,
            //@ts-expect-error caused by using variable instead of typing inline
            ourServicesBlock,
            //@ts-expect-error caused by using variable instead of typing inline
            poweredByDataBlock,
            //@ts-expect-error caused by using variable instead of typing inline
            whoWeWorkWithBlock,
            //@ts-expect-error caused by using variable instead of typing inline
            whyRgBlock,
          ],
        },
      ],
    },
    {
      label: 'Legal Page',
      name: 'legal',
      path: 'content/legal',
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
              name: 'meta_canonical',
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
              label: 'Heading',
              name: 'hero_heading',
            },
            {
              type: 'string',
              label: 'Intro text',
              name: 'hero_description',
            },
          ],
        },
        {
          type: 'rich-text',
          label: 'Body Content',
          name: 'body',
          isBody: true,
        },
      ],
    },
  ],
})
