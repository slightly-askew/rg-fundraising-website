import { styled } from '@theme'
import MaxWidthWrapper from '@components/max-width-wrapper'

export interface FooterProps {}

function Footer({}: FooterProps): JSX.Element {
  return (
    <footer>
      <MaxWidthWrapper>this is Footer</MaxWidthWrapper>
    </footer>
  )
}

export default Footer
