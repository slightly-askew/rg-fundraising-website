import SectionWrapper from '@components/section-wrapper'
import MaxWidthWrapper from '@components/max-width-wrapper'
import TextGreenify, { Green } from '@components/text-greenify'
import { Paragraph } from '@typography'

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
    <SectionWrapper>
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
              <Paragraph>{service?.service_description}</Paragraph>
            </li>
          ))}
        </ul>
        <figure>
          <Paragraph as="blockquote">
            <TextGreenify>{mission}</TextGreenify>
          </Paragraph>
        </figure>
      </MaxWidthWrapper>
    </SectionWrapper>
  )
}

export default OurServices
