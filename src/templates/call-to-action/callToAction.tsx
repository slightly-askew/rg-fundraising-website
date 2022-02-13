import Button from '@components/button'
import MaxWidthWrapper from '@components/max-width-wrapper'
import TextGreenify from '@components/text-greenify'

export interface CallToActionProps {
  heading?: string | null | undefined
  buttonText?: string | null | undefined
}

function CallToAction({ heading, buttonText }: CallToActionProps) {
  return (
    <section>
      <MaxWidthWrapper>
        <h1>
          <TextGreenify>{heading}</TextGreenify>
        </h1>
        <Button>{buttonText}</Button>
      </MaxWidthWrapper>
    </section>
  )
}

export default CallToAction
