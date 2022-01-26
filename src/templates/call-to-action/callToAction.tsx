import Button from '@components/button'
import MaxWidthWrapper from '@components/max-width-wrapper'

export interface CallToActionProps {
  heading?: string | null | undefined
  buttonText?: string | null | undefined
}

function CallToAction({ heading, buttonText }: CallToActionProps) {
  return (
    <section>
      <MaxWidthWrapper>
        <h1>{heading}</h1>
        <Button>{buttonText}</Button>
      </MaxWidthWrapper>
    </section>
  )
}

export default CallToAction
