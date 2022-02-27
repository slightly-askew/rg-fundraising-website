import styled from '@theme'
import MaxWidthWrapper from '@components/max-width-wrapper'
import SectionWrapper from '@components/section-wrapper'
import TextGreenify from '@components/text-greenify'
import { Heading2 } from '@theme/typography'
export interface WhyRgProps {
  heading?: string
  content?: React.ReactNode
}

function WhyRg({ heading, content }: WhyRgProps) {
  return (
    <SectionWrapper>
      <WhyRgMaxWidthWrapper>
        <ContentWrapper>
          <Heading2 as="h1">
            <TextGreenify>{heading || ''}</TextGreenify>
          </Heading2>
          {content}
        </ContentWrapper>
      </WhyRgMaxWidthWrapper>
    </SectionWrapper>
  )
}

const WhyRgMaxWidthWrapper = styled(MaxWidthWrapper, {
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

export default WhyRg
