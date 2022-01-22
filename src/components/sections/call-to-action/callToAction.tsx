import Button from '@atoms/button'
import MaxWidthWrapper from '@layout/max-width-wrapper'

export interface CallToActionProps {}

function CallToAction({}) {
  return (
    <section>
      <MaxWidthWrapper>
        <h1>What are you waiting for?</h1>
        <Button>Get in Touch</Button>
      </MaxWidthWrapper>
    </section>
  )
}

export default CallToAction
