import React from 'react'
import type { Homepage } from '../../.tina/__generated__/types'
import CallToAction from './call-to-action'
import MeetTheTeam from './meet-the-team'
import OurServices from './our-services'
import PoweredByData from './powered-by-data'
import WhoWeWorkWith from './who-we-work-with'
import WhyRg from './why-rg'

function BlockRenderer(props: Homepage) {
  return (
    <>
      {props.content_sections
        ? props.content_sections.map((block, i: any) => {
            console.log(block?.__typename)
            switch (block?.__typename) {
              case 'HomepageContent_sectionsMeet_the_team':
                return (
                  <React.Fragment key={block.__typename + i}>
                    <MeetTheTeam
                      heading={block.heading}
                      description={block.description}
                      team_members={block.team_members}
                    />
                  </React.Fragment>
                )
              case 'HomepageContent_sectionsWho_we_work_with':
                return (
                  <React.Fragment key={block.__typename + i}>
                    <WhoWeWorkWith
                      heading={block.heading}
                      content={block.content}
                      charities={block.charities}
                    />
                  </React.Fragment>
                )
              case 'HomepageContent_sectionsOur_services':
                return (
                  <React.Fragment key={block.__typename + i}>
                    <OurServices heading={block.heading} />
                  </React.Fragment>
                )
              case 'HomepageContent_sectionsPowered_by_data':
                return (
                  <React.Fragment key={block.__typename + i}>
                    <PoweredByData
                      heading={block.heading}
                      content={block.content}
                    />
                  </React.Fragment>
                )
              case 'HomepageContent_sectionsWhy_rg':
                return (
                  <React.Fragment key={block.__typename + i}>
                    <WhyRg heading={block.heading} content={block.content} />
                  </React.Fragment>
                )
              case 'HomepageContent_sectionsCall_to_action':
                return (
                  <React.Fragment key={block.__typename + i}>
                    <CallToAction heading={block.heading} />
                  </React.Fragment>
                )
              default:
                return null
            }
          })
        : null}
    </>
  )
}

export default BlockRenderer
