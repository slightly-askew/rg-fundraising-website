import { Field } from '@tinacms/toolkit'

export const seoDataField = {
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
}

export const heroSectionField = {
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
}
