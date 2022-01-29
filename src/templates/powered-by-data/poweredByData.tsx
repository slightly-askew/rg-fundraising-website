import MaxWidthWrapper from '@components/max-width-wrapper'
import { TinaMarkdown, TinaMarkdownContent } from 'tinacms/dist/rich-text'

export interface PoweredByDataProps {
  heading: string | null | undefined
  content: TinaMarkdownContent
}

function PoweredByData({ heading, content }: PoweredByDataProps) {
  return (
    <section>
      <MaxWidthWrapper>
        <h1>{heading}</h1>
        <TinaMarkdown content={content} />
      </MaxWidthWrapper>
    </section>
  )
}

export default PoweredByData
