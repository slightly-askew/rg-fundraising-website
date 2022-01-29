import Button from '@components/button'
import MaxWidthWrapper from '@components/max-width-wrapper'

export interface HeroProps {
  heading?: string | null | undefined
  description?: string | null | undefined
  button_text?: string | null | undefined
}

function Hero({ heading, description, button_text }: HeroProps) {
  return (
    <section>
      <MaxWidthWrapper>
        <h1>{heading}</h1>
        <p>{description}</p>
        <Button>{button_text}</Button>
      </MaxWidthWrapper>
    </section>
  )
}

export default Hero
