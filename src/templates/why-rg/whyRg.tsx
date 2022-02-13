import MaxWidthWrapper from '@components/max-width-wrapper'
import TinaMarkdown from '@components/tina-markdown'
import TextGreenify from '@components/text-greenify'
export interface WhyRgProps {
  heading?: string
  content?: React.ReactNode
}

function WhyRg({ heading, content }: WhyRgProps) {
  return (
    <section>
      <MaxWidthWrapper>
        <h1>
          <TextGreenify>{heading || ''}</TextGreenify>
        </h1>
        {content}
      </MaxWidthWrapper>
    </section>
  )
}

export default WhyRg
