import Image from 'next/image'
import MaxWidthWrapper from '@components/max-width-wrapper'
import VisuallyHidden from '@components/visually-hidden'
import TinaMarkdown from '@components/tina-markdown'
import TextGreenify, { Green } from '@components/text-greenify'

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
    <section>
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
                    <Image
                      alt={`The logo of ${c.charity_name}`}
                      src={c.charity_logo}
                      height={100}
                      width={100}
                      objectFit="contain"
                    ></Image>
                  </article>
                </li>
              )
          )}
        </ul>
      </MaxWidthWrapper>
    </section>
  )
}

export default WhoWeWorkWith
