import Image from 'next/image'
import SectionWrapper from '@components/section-wrapper'
import MaxWidthWrapper from '@components/max-width-wrapper'
import VisuallyHidden from '@components/visually-hidden'
import styled from '@theme'
import TextGreenify from '@components/text-greenify'

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
      <MaxWidthWrapper>
        <h1>
          <TextGreenify>{heading || ''}</TextGreenify>
        </h1>
        {content}
        <ul>
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
        </ul>
      </MaxWidthWrapper>
    </SectionWrapper>
  )
}

const ImageWrapper = styled('div', {
  position: 'relative',
  size: '$10',
})

export default WhoWeWorkWith
