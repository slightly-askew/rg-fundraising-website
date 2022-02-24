import { styled } from '@theme'
import Link from 'next/link'
import MaxWidthWrapper from '@components/max-width-wrapper'
import Button from '@components/button'
import RgLogo from '@components/rg-logo'

export interface HeaderProps {}

function Header({}: HeaderProps): JSX.Element {
  return (
    <Wrapper>
      <Link href="/" passHref>
        <ImageWrapper>
          <RgLogo />
        </ImageWrapper>
      </Link>
      <Button>Get in touch</Button>
    </Wrapper>
  )
}

const Wrapper = styled('header', MaxWidthWrapper, {
  position: 'fixed',
  left: 0,
  right: 0,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  pt: '$4',
  pb: '$3',
})

const ImageWrapper = styled('a', {
  height: '$3',
  '@tablet': {
    height: '$4',
  },
  '@laptop': {
    height: '$5',
  },
})

export default Header
