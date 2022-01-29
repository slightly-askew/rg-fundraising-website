import MaxWidthWrapper from '@components/max-width-wrapper'
import Image from 'next/image'

export interface MeetTheTeamProps {
  heading?: string | null | undefined
  description?: string | null | undefined
  team_members?: (TeamMember | null | undefined)[] | null | undefined
}

interface TeamMember {
  name?: string | null | undefined
  position?: string | null | undefined
  avatar?: string | null | undefined
}

function MeetTheTeam({ heading, description, team_members }: MeetTheTeamProps) {
  return (
    <section>
      <MaxWidthWrapper>
        <h1>{heading}</h1>
        <p>{description}</p>
        <ul>
          {team_members?.map(
            (m, i) =>
              m?.name && (
                <li key={m?.name + i}>
                  <article>
                    <h2>{m.name}</h2>
                    <p>{m.position}</p>
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
    </section>
  )
}

export default MeetTheTeam
