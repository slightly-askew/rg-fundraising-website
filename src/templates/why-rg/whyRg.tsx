import MaxWidthWrapper from '@components/max-width-wrapper'
import SectionWrapper from '@components/section-wrapper'
import TextGreenify from '@components/text-greenify'
export interface WhyRgProps {
  heading?: string
  content?: React.ReactNode
}

function WhyRg({ heading, content }: WhyRgProps) {
  return (
    <SectionWrapper>
      <MaxWidthWrapper>
        <h1>
          <TextGreenify>{heading || ''}</TextGreenify>
        </h1>
        {content}
      </MaxWidthWrapper>
    </SectionWrapper>
  )
}

export default WhyRg
