import styled from '@theme'
import SectionWrapper from '@components/section-wrapper'
import MaxWidthWrapper from '@components/max-width-wrapper'
import TextGreenify, { Green } from '@components/text-greenify'
import { Heading2, Paragraph } from '@typography'
import Card from '@components/card'

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
      <ServicesMaxWidthWrapper>
        <ContentWrapper>
          <Heading2 as="h1">
            <TextGreenify>{heading || ''}</TextGreenify>
          </Heading2>
          {description}
        </ContentWrapper>
        <ServiceListWrapper>
          {services?.map((service, i) => (
            <ServiceListItm
              key={
                (service?.service_title || '') +
                (service?.service_description || '') +
                i
              }
            >
              <Card>
                <h2>
                  <Green>{service?.service_title}</Green>
                </h2>
                <Paragraph>{service?.service_description}</Paragraph>
              </Card>
            </ServiceListItm>
          ))}
        </ServiceListWrapper>
        <MissionFigure>
          <Paragraph as="blockquote" size="large">
            <strong>
              <TextGreenify>{mission}</TextGreenify>
            </strong>
          </Paragraph>
        </MissionFigure>
      </ServicesMaxWidthWrapper>
    </SectionWrapper>
  )
}

const ServicesMaxWidthWrapper = styled(MaxWidthWrapper, {
  alignItems: 'center',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  py: '$6',
})

const ContentWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  maxWidth: '640px',
})

const MissionFigure = styled('figure', {
  maxWidth: '720px',
})

const ServiceListWrapper = styled('ul', {
  listStyle: 'none',
  p: 0,
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '$4',
})

const ServiceListItm = styled('li', {
  flex: 1,
  display: 'flex',
  justifyContent: 'stretch',
})

export default OurServices
