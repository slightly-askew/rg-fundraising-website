import { defineSchema } from '@tinacms/cli'
import {
  callToActionBlock,
  meetTheTeamBlock,
  ourServicesBlock,
  poweredByDataBlock,
  whoWeWorkWithBlock,
  whyRgBlock,
} from './blocks'
import { heroSectionField, seoDataField } from './fields'

export default defineSchema({
  collections: [
    {
      label: 'Homepage Content',
      name: 'homepage',
      path: 'content',
      fields: [
        //@ts-expect-error unexplainable type issues when using a variable
        { ...seoDataField },
        //@ts-expect-error unexplainable type issues when using a variable
        { ...heroSectionField },
        {
          type: 'object',
          list: true,
          name: 'content_sections',
          label: 'Content Sections',
          templates: [
            //@ts-expect-error unexplainable type issues when using a variable
            callToActionBlock,
            //@ts-expect-error unexplainable type issues when using a variable
            meetTheTeamBlock,
            //@ts-expect-error unexplainable type issues when using a variable
            ourServicesBlock,
            //@ts-expect-error unexplainable type issues when using a variable
            poweredByDataBlock,
            //@ts-expect-error unexplainable type issues when using a variable
            whoWeWorkWithBlock,
            //@ts-expect-error unexplainable type issues when using a variable
            whyRgBlock,
          ],
        },
      ],
    },
    {
      label: 'Privacy Policy',
      name: 'privacy_policy',
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
            {
              type: 'string',
              label: 'Button text',
              name: 'hero_button_text',
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
