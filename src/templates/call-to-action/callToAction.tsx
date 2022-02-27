import styled from '@theme'
import Button from '@components/button'
import MaxWidthWrapper from '@components/max-width-wrapper'
import TextGreenify from '@components/text-greenify'
import SectionWrapper from '@components/section-wrapper'
import { Heading2 } from '@theme/typography'

export interface CallToActionProps {
  heading?: string | null | undefined
  buttonText?: string | null | undefined
}

function CallToAction({ heading, buttonText }: CallToActionProps) {
  return (
    <SectionWrapper>
      <MaxWidthWrapper>
        <ContentWrapper>
          <Heading2>
            <TextGreenify>{heading}</TextGreenify>
          </Heading2>
          <Button>{buttonText}</Button>
        </ContentWrapper>
      </MaxWidthWrapper>
    </SectionWrapper>
  )
}

const ContentWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$5',
  maxWidth: '640px',
  mx: 'auto',
  textAlign: 'center',
})

export default CallToAction
