import MaxWidthWrapper from '@components/max-width-wrapper'

export interface MeetTheTeamProps {}

function MeetTheTeam({}) {
  return (
    <section>
      <MaxWidthWrapper>
        <h1>Meet the team</h1>
        <p>We are always expanding but the current team is below.</p>
        <ul>
          <li>
            <article>
              <h2>Matt Keating</h2>
              <p>Director</p>
            </article>
          </li>
          <li>
            <article>
              <h2>Mike Ager</h2>
              <p>Director</p>
            </article>
          </li>
          <li>
            <article>
              <h2>James Prout</h2>
              <p>Director</p>
            </article>
          </li>
          <li>
            <article>
              <h2>Cindy Harper</h2>
              <p>Ops Coordinator</p>
            </article>
          </li>
        </ul>
      </MaxWidthWrapper>
    </section>
  )
}

export default MeetTheTeam
