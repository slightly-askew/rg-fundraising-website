import Image from 'next/image'
import SectionWrapper from '@components/section-wrapper'
import MaxWidthWrapper from '@components/max-width-wrapper'
import TextGreenify, { Green } from '@components/text-greenify'
import { Paragraph } from '@typography'

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
      <MaxWidthWrapper>
        <h1>
          <TextGreenify>{heading || ''}</TextGreenify>
        </h1>
        {description}
        <ul>
          {team_members?.map(
            (m, i) =>
              m?.name && (
                <li key={m?.name + i}>
                  <article>
                    <h2>
                      <Green>{m.name}</Green>
                    </h2>
                    <Paragraph>{m.position}</Paragraph>
                    {m?.avatar && (
                      <Image
                        src={m.avatar}
                        height={150}
                        width={150}
                        objectFit="cover"
                        alt={`Photograph of ${m.name}`}
                      />
                    )}
                  </article>
                </li>
              )
          )}
        </ul>
      </MaxWidthWrapper>
    </SectionWrapper>
  )
}

export default MeetTheTeam
