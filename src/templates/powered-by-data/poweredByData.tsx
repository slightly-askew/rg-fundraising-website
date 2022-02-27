import SectionWrapper from '@components/section-wrapper'
import MaxWidthWrapper from '@components/max-width-wrapper'
import styled from '@theme'
import TextGreenify from '@components/text-greenify'
import Image from 'next/image'
import { Heading2 } from '@theme/typography'

export interface PoweredByDataProps {
  heading: string | null | undefined
  content?: React.ReactNode
  imageSrc?: string | null
  imageAlt?: string | null
}

function PoweredByData({
  heading,
  content,
  imageAlt,
  imageSrc,
}: PoweredByDataProps) {
  return (
    <SectionWrapper>
      <PoweredMaxWidthWrapper>
        <ContentWrapper>
          <Heading2 as="h1">
            <TextGreenify>{heading || ''}</TextGreenify>
          </Heading2>
          {content}
        </ContentWrapper>
        <ImageWrapper>
          {imageSrc && (
            <Image
              src={imageSrc}
              alt={imageAlt || ''}
              layout="fill"
              objectFit="contain"
              objectPosition="bottom"
            />
          )}
        </ImageWrapper>
      </PoweredMaxWidthWrapper>
    </SectionWrapper>
  )
}

const PoweredMaxWidthWrapper = styled(MaxWidthWrapper, {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  position: 'relative',
})

const Wrapper = styled('div', {
  flex: 1,
  minWidth: 'min(400px,100%)',
})

const ImageWrapper = styled(Wrapper, {
  height: '$12',
  position: 'relative',
})

const ContentWrapper = styled(Wrapper, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  maxWidth: '480px',
})

export default PoweredByData
