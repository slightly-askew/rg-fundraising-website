import dynamic from 'next/dynamic'
import MaxWidthWrapper from '@components/max-width-wrapper'
const Button = dynamic(() => import('@components/button'))
import TextGreenify from '@components/text-greenify'

export interface HeroProps {
  heading?: string | null
  description?: React.ReactNode
  button_text?: string | null | undefined
}

function Hero({ heading, description, button_text }: HeroProps) {
  return (
    <section>
      <MaxWidthWrapper>
        <div>
          {heading && (
            <h1>
              <TextGreenify>{heading}</TextGreenify>
            </h1>
          )}
          {description}
          {button_text && <Button>{button_text}</Button>}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Hero
