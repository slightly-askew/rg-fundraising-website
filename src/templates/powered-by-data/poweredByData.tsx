import SectionWrapper from '@components/section-wrapper'
import MaxWidthWrapper from '@components/max-width-wrapper'
import styled from '@theme'
import TextGreenify from '@components/text-greenify'

export interface PoweredByDataProps {
  heading: string | null | undefined
  content?: React.ReactNode
}

function PoweredByData({ heading, content }: PoweredByDataProps) {
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

export default PoweredByData
