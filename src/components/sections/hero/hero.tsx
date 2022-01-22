import Button from '@atoms/button'
import MaxWidthWrapper from '@layout/max-width-wrapper'

export interface HeroProps {}

function Hero({}) {
  return (
    <section>
      <MaxWidthWrapper>
        <h1>Your Regular Giving Fundraising Team</h1>
        <p>
          Work with the best-quality findraiser in Australia and see results,
          fast.
        </p>
        <Button>Get in Touch</Button>
      </MaxWidthWrapper>
    </section>
  )
}

export default Hero
