import Button from '@components/button'
import MaxWidthWrapper from '@components/max-width-wrapper'
import TextGreenify from '@components/text-greenify'
import SectionWrapper from '@components/section-wrapper'

export interface CallToActionProps {
  heading?: string | null | undefined
  buttonText?: string | null | undefined
}

function CallToAction({ heading, buttonText }: CallToActionProps) {
  return (
    <SectionWrapper>
      <MaxWidthWrapper>
        <h1>
          <TextGreenify>{heading}</TextGreenify>
        </h1>
        <Button>{buttonText}</Button>
      </MaxWidthWrapper>
    </SectionWrapper>
  )
}

export default CallToAction
