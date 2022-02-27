import dynamic from 'next/dynamic'
import SectionWrapper from '@components/section-wrapper'
import MaxWidthWrapper from '@components/max-width-wrapper'
const Button = dynamic(() => import('@components/button'))
import TextGreenify from '@components/text-greenify'
import styled from '@theme'
import { Heading1 } from '@typography'
import Image from 'next/image'

export interface HeroProps {
  heading?: string | null
  description?: React.ReactNode
  button_text?: string | null | undefined
  imageSrc?: string | null
  imageAlt?: string | null
}

function Hero({
  heading,
  description,
  button_text,
  imageAlt,
  imageSrc,
}: HeroProps) {
  return (
    <HeroSectionWrapper>
      <MaxWidthWrapper>
        {imageSrc && (
          <ImageWrapper>
            <Image
              src={imageSrc}
              alt={imageAlt || ''}
              layout="fill"
              objectFit="contain"
              objectPosition="bottom"
            />
          </ImageWrapper>
        )}
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

const ImageWrapper = styled('div', {
  position: 'absolute',
  top: '$5',
  right: 0,
  bottom: '$3',
  width: 'max(320px,50%)',
  '@desktop': {
    right: '15vw',
  },
})

const ContentWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  maxWidth: '590px',
  pb: '$6',
  '@tablet': {
    '& h1': {
      pr: '80px',
    },
  },
})

export default Hero
