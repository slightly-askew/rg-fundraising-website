import dynamic from 'next/dynamic'
import SectionWrapper from '@components/section-wrapper'
import MaxWidthWrapper from '@components/max-width-wrapper'
const Button = dynamic(() => import('@components/button'))
import TextGreenify from '@components/text-greenify'
import styled from '@theme'
import { Heading1 } from '@typography'

export interface HeroProps {
  heading?: string | null
  description?: React.ReactNode
  button_text?: string | null | undefined
}

function Hero({ heading, description, button_text }: HeroProps) {
  return (
    <HeroSectionWrapper>
      <MaxWidthWrapper>
        <ContentWrapper>
          {heading && (
            <Heading1>
              <TextGreenify>{heading}</TextGreenify>
            </Heading1>
          )}
          {description}
        </ContentWrapper>
        {button_text && <Button>{button_text}</Button>}
      </MaxWidthWrapper>
    </HeroSectionWrapper>
  )
}

const HeroSectionWrapper = styled(SectionWrapper, {
  minHeight: 'min(768px,66vh)',
})

const ContentWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  maxWidth: '640px',
  pb: '$6',
})

const Heading = styled('h1', {
  fontSize: '48px',
  lineHeight: '56px',
})

export default Hero
