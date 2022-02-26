import { styled } from '@theme'
import Link from 'next/link'
import MaxWidthWrapper from '@components/max-width-wrapper'
import Button from '@components/button'
import RgLogo from '@components/rg-logo'

export interface HeaderProps {}

function Header({}: HeaderProps): JSX.Element {
  return (
    <Wrapper>
      <Background />
      <NavigationWrapper>
        <Link href="/" passHref>
          <ImageWrapper>
            <RgLogo />
          </ImageWrapper>
        </Link>
        <Button>Get in touch</Button>
      </NavigationWrapper>
    </Wrapper>
  )
}

const Wrapper = styled('header', {
  position: 'fixed',
  left: 0,
  right: 0,
  zIndex: 1,
})

const NavigationWrapper = styled(MaxWidthWrapper, {
  isolation: 'isolate',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  pt: '$4',
  pb: '$4',
  //transform: 'translateY(32px)',
})

const Background = styled('span', {
  display: 'block',
  position: 'absolute',
  tlbr: 0,
  background: '$white',
  borderBottom: '1px solid $gray200',
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
