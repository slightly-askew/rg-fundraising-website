import dynamic from 'next/dynamic'
import MaxWidthWrapper from '@components/max-width-wrapper'
const Button = dynamic(() => import('@components/button'))

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
        {button_text && <Button>{button_text}</Button>}
      </MaxWidthWrapper>
    </section>
  )
}

export default Hero
