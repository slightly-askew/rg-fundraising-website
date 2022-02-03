import MaxWidthWrapper from '@components/max-width-wrapper'
import { TinaMarkdown, type TinaMarkdownContent } from 'tinacms/dist/rich-text'

export interface PoweredByDataProps {
  content: TinaMarkdownContent
}

function PoweredByData({ content }: PoweredByDataProps) {
  return (
    <section>
      <MaxWidthWrapper>
        <TinaMarkdown content={content} />
      </MaxWidthWrapper>
    </section>
  )
}

export default PoweredByData
