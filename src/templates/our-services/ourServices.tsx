import MaxWidthWrapper from '@components/max-width-wrapper'
import TextGreenify, { Green } from '@components/text-greenify'

export interface OurServicesProps {
  heading?: string
  description?: React.ReactNode
  services?: Service[]
  mission?: string
}

type Service = {
  service_title?: string | null
  service_description?: string | null
} | null

function OurServices({
  heading,
  description,
  services,
  mission,
}: OurServicesProps) {
  return (
    <section>
      <MaxWidthWrapper>
        <h1>
          <TextGreenify>{heading || ''}</TextGreenify>
        </h1>
        {description}
        <ul>
          {services?.map((service, i) => (
            <li
              key={
                (service?.service_title || '') +
                (service?.service_description || '') +
                i
              }
            >
              <h2>
                <Green>{service?.service_title}</Green>
              </h2>
              <p>{service?.service_description}</p>
            </li>
          ))}
        </ul>
        <figure>
          <blockquote>
            <TextGreenify>{mission}</TextGreenify>
          </blockquote>
        </figure>
      </MaxWidthWrapper>
    </section>
  )
}

export default OurServices
