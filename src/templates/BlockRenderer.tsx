import tinaMarkdown from '@components/tina-markdown'
import dynamic from 'next/dynamic'
import React from 'react'
import type { Page } from '../../.tina/__generated__/types'

const CallToAction = dynamic(() => import('./call-to-action'))
const MeetTheTeam = dynamic(() => import('./meet-the-team'))
const OurServices = dynamic(() => import('./our-services'))
const PoweredByData = dynamic(() => import('./powered-by-data'))
const WhoWeWorkWith = dynamic(() => import('./who-we-work-with'))
const WhyRg = dynamic(() => import('./why-rg'))

const TinaMarkdown = dynamic(() => import('@components/tina-markdown'))

function BlockRenderer(props: Page) {
  const { blocks } = props
  return (
    <>
      {blocks
        ? blocks.map((block, i: any) => {
            switch (block?.__typename) {
              case 'PageBlocksMeet_the_team':
                return (
                  <React.Fragment key={block.__typename + i}>
                    <MeetTheTeam
                      heading={block.heading}
                      description={
                        block.description && (
                          //@ts-expect-error
                          <TinaMarkdown>{block.description}</TinaMarkdown>
                        )
                      }
                      team_members={block.team_members}
                    />
                  </React.Fragment>
                )
              case 'PageBlocksWho_we_work_with':
                return (
                  <React.Fragment key={block.__typename + i}>
                    <WhoWeWorkWith
                      heading={block.heading}
                      content={
                        block.content && (
                          <TinaMarkdown>{block.content}</TinaMarkdown>
                        )
                      }
                      charities={block.charities}
                    />
                  </React.Fragment>
                )
              case 'PageBlocksOur_services':
                return (
                  <React.Fragment key={block.__typename + i}>
                    <OurServices
                      heading={block.heading || ''}
                      description={
                        block.services_description && (
                          <TinaMarkdown>
                            {block.services_description}
                          </TinaMarkdown>
                        )
                      }
                      services={block?.services || []}
                      mission={block?.services_mission || ''}
                    />
                  </React.Fragment>
                )
              case 'PageBlocksPowered_by_data':
                return (
                  <React.Fragment key={block.__typename + i}>
                    <PoweredByData
                      heading={block.heading}
                      content={
                        block.content && (
                          <TinaMarkdown>{block.content}</TinaMarkdown>
                        )
                      }
                    />
                  </React.Fragment>
                )
              case 'PageBlocksWhy_rg':
                return (
                  <React.Fragment key={block.__typename + i}>
                    <WhyRg
                      heading={block.heading || ''}
                      content={
                        block.content && (
                          <TinaMarkdown>{block.content}</TinaMarkdown>
                        )
                      }
                    />
                  </React.Fragment>
                )
              case 'PageBlocksCall_to_action':
                return (
                  <React.Fragment key={block.__typename + i}>
                    <CallToAction
                      heading={block.heading}
                      buttonText={block.button_text}
                    />
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
