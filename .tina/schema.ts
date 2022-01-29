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
          name: 'content_sections',
          label: 'Content Sections',
          templates: [
            //@ts-expect-error
            callToActionBlock,
            //@ts-expect-error
            meetTheTeamBlock,
            //@ts-expect-error
            ourServicesBlock,
            //@ts-expect-error
            poweredByDataBlock,
            //@ts-expect-error
            whoWeWorkWithBlock,
            //@ts-expect-error
            whyRgBlock,
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
