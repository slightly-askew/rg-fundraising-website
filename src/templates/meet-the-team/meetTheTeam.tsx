import Image from 'next/image'
import styled from '@theme'
import SectionWrapper from '@components/section-wrapper'
import MaxWidthWrapper from '@components/max-width-wrapper'
import Card from '@components/card'
import TextGreenify, { Green } from '@components/text-greenify'
import { Heading2, Paragraph } from '@typography'

export interface MeetTheTeamProps {
  heading?: string | null | undefined
  description?: React.ReactNode
  team_members?: (TeamMember | null | undefined)[] | null | undefined
}

interface TeamMember {
  name?: string | null | undefined
  position?: string | null | undefined
  avatar?: string | null | undefined
}

function MeetTheTeam({ heading, description, team_members }: MeetTheTeamProps) {
  return (
    <SectionWrapper>
      <MeetTheTeamMaxWidthWrapper>
        <ContentWrapper>
          <Heading2 as="h1">
            <TextGreenify>{heading || ''}</TextGreenify>
          </Heading2>
        </ContentWrapper>
        {description}
        <MeetTheTeamListWrapper>
          {team_members?.map(
            (m, i) =>
              m?.name && (
                <MeetTheTeamListItm key={m?.name + i}>
                  <MeetTheTeamCard>
                    <h2>
                      <Green>{m.name}</Green>
                    </h2>
                    <Paragraph>{m.position}</Paragraph>
                    {m?.avatar && (
                      <AvatarWrapper>
                        <Image
                          src={m.avatar}
                          layout="fill"
                          objectFit="cover"
                          alt={`Photograph of ${m.name}`}
                        />
                      </AvatarWrapper>
                    )}
                  </MeetTheTeamCard>
                </MeetTheTeamListItm>
              )
          )}
        </MeetTheTeamListWrapper>
      </MeetTheTeamMaxWidthWrapper>
    </SectionWrapper>
  )
}

const ContentWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  maxWidth: '640px',
})

const MeetTheTeamMaxWidthWrapper = styled(MaxWidthWrapper, {
  alignItems: 'center',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  py: '$6',
})

const MeetTheTeamListWrapper = styled('ul', {
  alignSelf: 'stretch',
  listStyle: 'none',
  p: 0,
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '$4',
})

const MeetTheTeamListItm = styled('li', {
  flex: 1,
  display: 'flex',
  justifyContent: 'stretch',
})

const MeetTheTeamCard = styled(Card, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  mt: '$6',
})

const AvatarWrapper = styled('div', {
  position: 'relative',
  order: -1,
  size: '$8',
  mt: 'calc($8 * -0.4)',
  mb: '$3',
  borderRadius: '50%',
  overflow: 'hidden',
})

export default MeetTheTeam
