import MaxWidthWrapper from '@components/max-width-wrapper'

export interface OurServicesProps {}

function OurServices({}) {
  return (
    <section>
      <MaxWidthWrapper>
        <h1>What Services do we provide?</h1>
        <p>
          RG Fundraising providers donor aquisition, donor retention and
          consultancy services for some of the best brands in the world.
        </p>
        <ul>
          <li>
            <h2>Donor Aquisition</h2>
            <p>Face-to-Face</p>
          </li>
          <li>
            <h2>Donor Aquisition</h2>
            <p>Telemarketing</p>
          </li>
          <li>
            <h2>Donor Retention</h2>
            <p>Omni-channel</p>
          </li>
          <li>
            <h2>Consultancy</h2>
            <p>Industry-wide</p>
          </li>
        </ul>
        <figure>
          <blockquote>
            Our Aim is simple; to become the best-quality, sustainable
            findraising programme in Australia.
          </blockquote>
        </figure>
      </MaxWidthWrapper>
    </section>
  )
}

export default OurServices
