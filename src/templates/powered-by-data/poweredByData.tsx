import MaxWidthWrapper from '@components/max-width-wrapper'
import styled from '@theme'
import TextGreenify from '@components/text-greenify'

export interface PoweredByDataProps {
  heading: string | null | undefined
  content?: React.ReactNode
}

function PoweredByData({ heading, content }: PoweredByDataProps) {
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

export default PoweredByData
