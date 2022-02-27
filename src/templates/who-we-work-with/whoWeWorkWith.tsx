import styled from '@theme'
import Image from 'next/image'
import SectionWrapper from '@components/section-wrapper'
import MaxWidthWrapper from '@components/max-width-wrapper'
import VisuallyHidden from '@components/visually-hidden'
import TextGreenify from '@components/text-greenify'
import { Heading2 } from '@theme/typography'

export interface WhoWeWorkWithProps {
  heading: string | null | undefined
  content: React.ReactNode
  charities: (Charity | null | undefined)[] | null | undefined
}

interface Charity {
  charity_name?: string | null | undefined
  charity_logo?: string | null | undefined
}

function WhoWeWorkWith({ heading, content, charities }: WhoWeWorkWithProps) {
  return (
    <SectionWrapper>
      <WhoWeWorkWithMaxWidthWrapper>
        <ContentWrapper>
          <Heading2>
            <TextGreenify>{heading || ''}</TextGreenify>
          </Heading2>
          {content}
        </ContentWrapper>
        <WhoWeWorkWithListWrapper>
          {charities?.map(
            (c, i) =>
              c?.charity_logo && (
                <li key={c.charity_logo + i}>
                  <article>
                    <VisuallyHidden as="h2">{c.charity_name}</VisuallyHidden>
                    <ImageWrapper>
                      <Image
                        alt={`The logo of ${c.charity_name}`}
                        src={c.charity_logo}
                        layout="fill"
                        objectFit="contain"
                      />
                    </ImageWrapper>
                  </article>
                </li>
              )
          )}
        </WhoWeWorkWithListWrapper>
      </WhoWeWorkWithMaxWidthWrapper>
    </SectionWrapper>
  )
}

const WhoWeWorkWithMaxWidthWrapper = styled(MaxWidthWrapper, {
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

const WhoWeWorkWithListWrapper = styled('ul', {
  alignSelf: 'stretch',
  listStyle: 'none',
  p: 0,
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  gap: '$4',
})

const ImageWrapper = styled('div', {
  position: 'relative',
  height: '$10',
  aspectRatio: 16 / 9,
})

export default WhoWeWorkWith
