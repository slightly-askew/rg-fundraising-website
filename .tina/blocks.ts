export const callToActionBlock = {
  name: 'call_to_action',
  label: 'Call To Action',
  ui: {
    defaultItem: {
      heading: 'What are you waiting for?',
      button_text: 'Get in touch',
    },
  },
  fields: [
    {
      type: 'string',
      label: 'Heading',
      name: 'heading',
    },
    {
      type: 'string',
      label: 'Button Text',
      name: 'button_text',
    },
  ],
}

export const meetTheTeamBlock = {
  name: 'meet_the_team',
  label: 'Meet The Team',
  ui: {
    defaultItem: {
      heading: 'What are you waiting for?',
      description: 'We are always expanding but the current team is below.',
    },
  },
  fields: [
    {
      type: 'string',
      label: 'Heading',
      name: 'heading',
    },
    {
      type: 'rich-text',
      label: 'Description',
      name: 'description',
    },
    {
      label: 'Team Members',
      name: 'team_members',
      type: 'object',
      list: true,
      ui: {
        defaultItem: {
          name: 'Matt Keating',
          position: 'Director',
          avatar:
            'https://res.cloudinary.com/dalhx2c9c/image/upload/v1643163683/blankAvatar_psas7x.jpg',
        },
      },
      fields: [
        {
          type: 'string',
          label: 'Name',
          name: 'name',
        },
        {
          type: 'string',
          label: 'Position',
          name: 'position',
        },
        {
          name: 'avatar',
          type: 'image',
          label: 'Avatar',
        },
      ],
    },
  ],
}

export const ourServicesBlock = {
  name: 'our_services',
  label: 'Our Services',
  ui: {
    defaultItem: {
      template: 'our_services',
      heading: 'What Services do we provide?',
      description:
        'RG Fundraising provides donor aquisition, donor retention and consultancy services for some of the best brands in the world.',
    },
  },
  fields: [
    {
      type: 'string',
      label: 'Heading',
      name: 'heading',
    },
    {
      type: 'rich-text',
      label: 'Description',
      name: 'services_description',
    },
    {
      label: 'Services',
      name: 'services',
      type: 'object',
      list: true,
      ui: {
        defaultItem: {
          service_title: 'Donor Aquisition',
          service_description: 'Face-to-Face',
        },
      },
      fields: [
        {
          type: 'string',
          label: 'Service Title',
          name: 'service_title',
        },
        {
          type: 'string',
          label: 'Service Description',
          name: 'service_description',
        },
      ],
    },
    {
      type: 'string',
      label: 'Mission',
      name: 'services_mission',
    },
  ],
}

export const poweredByDataBlock = {
  name: 'powered_by_data',
  label: 'Powered By Data',
  ui: {
    defaultItem: {
      heading: 'Powered by Data',
      content: 'Start writing...',
    },
  },
  fields: [
    {
      name: 'heading',
      label: 'Heading',
      type: 'string',
    },
    {
      name: 'content',
      label: 'Content',
      type: 'rich-text',
    },
  ],
}

export const whoWeWorkWithBlock = {
  name: 'who_we_work_with',
  label: 'Who We Work With',
  ui: {
    defaultItem: {
      heading: 'Who do we work with?',
      content: 'We work with some of the best brands in Australia.',
    },
  },
  fields: [
    {
      name: 'heading',
      label: 'Heading',
      type: 'string',
    },
    {
      name: 'content',
      label: 'Content',
      type: 'rich-text',
    },
    {
      name: 'charities',
      label: 'Charities',
      type: 'object',
      list: true,
      ui: {
        defaultItem: {
          charity_name: 'Royal Flying Doctor Service',
          charity_logo:
            'https://res.cloudinary.com/dalhx2c9c/image/upload/v1643229054/charity_placeholder_jxgkfq.svg',
        },
      },
      fields: [
        {
          name: 'charity_name',
          label: 'Charity Name',
          type: 'string',
        },
        {
          name: 'charity_logo',
          label: 'Charity Logo',
          type: 'image',
        },
      ],
    },
  ],
}

export const whyRgBlock = {
  name: 'why_rg',
  label: 'Why RG Fundraising',
  ui: {
    defaultItem: {
      heading: 'Why RG Fundraising?',
      content: 'Start writing...',
    },
  },
  fields: [
    { name: 'heading', label: 'Heading', type: 'string' },
    { name: 'content', label: 'Content', type: 'rich-text' },
  ],
}
