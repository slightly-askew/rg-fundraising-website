import React from 'react'
import type { Pages } from '../../.tina/__generated__/types'
import MeetTheTeam from './meet-the-team'

function BlockRenderer(props: Pages) {
  return (
    <>
      {props.content_sections
        ? props.content_sections.map((block, i) => {
            console.log(block?.__typename)
            switch (block?.__typename) {
              case 'PagesContent_sectionsMeet_the_team':
                return (
                  <React.Fragment key={i + block.__typename}>
                    <MeetTheTeam
                      heading={block.heading}
                      description={block.description}
                      team_members={block.team_members}
                    />
                  </React.Fragment>
                )
            }
          })
        : null}
    </>
  )
}
