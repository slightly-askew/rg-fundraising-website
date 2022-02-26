import { styled } from '@theme'
import MaxWidthWrapper from '@components/max-width-wrapper'
import Link from 'next/link'
import { Text } from '@typography'

export interface FooterProps {}

function Footer({}: FooterProps): JSX.Element {
  return (
    <footer>
      <MaxWidthWrapper>
        <Link href="/privacy" passHref>
          <Text as="a">Privacy Policy</Text>
        </Link>
      </MaxWidthWrapper>
    </footer>
  )
}

export default Footer
