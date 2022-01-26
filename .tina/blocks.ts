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
      type: 'string',
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
