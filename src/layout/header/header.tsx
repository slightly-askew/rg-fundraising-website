import styled from '@theme'
import Link from 'next/link'
import MaxWidthWrapper from '@components/max-width-wrapper'
import Button from '@components/button'
import RgLogo from '@components/rg-logo'
import { useEffect, useState } from 'react'

export interface HeaderProps {}

function Header({}: HeaderProps): JSX.Element {
  const [mobileHeaderVisibleElement, setMobileHeaderVisibleElement] =
    useState('logo')
  function calculateVisibleElement() {
    if (window.scrollY > 768) {
      setMobileHeaderVisibleElement('button')
    } else {
      setMobileHeaderVisibleElement('logo')
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', calculateVisibleElement)
    return () => {
      window.removeEventListener('scroll', calculateVisibleElement)
    }
  }, [])
  return (
    <Wrapper>
      <Background />
      <NavigationWrapper>
        <LogoWrapper
          hidden={{
            '@initial': mobileHeaderVisibleElement !== 'logo',
            '@tablet': false,
          }}
        >
          <Link href="/" passHref>
            <RgLogo
              size={{
                '@initial': 'small',
                '@tablet': 'medium',
                '@desktop': 'large',
              }}
            />
          </Link>
        </LogoWrapper>
        <ButtonWrapper
          hidden={{
            '@initial': mobileHeaderVisibleElement !== 'button',
            '@tablet': false,
          }}
        >
          <Button>Get in touch</Button>
        </ButtonWrapper>
      </NavigationWrapper>
    </Wrapper>
  )
}

const hiddenVariants = {
  hidden: {
    true: {
      opacity: 0,
      userSelect: 'none',
      pointerEvents: 'none',
      transitionDelay: '0s',
    },
    false: {
      opacity: 1,
      userSelect: 'auto',
      pointerEvents: 'auto',
    },
  },
}

const LogoWrapper = styled('div', {
  transition: 'opacity 0.3s linear 0.5s',
  variants: {
    ...hiddenVariants,
  },
})

const ButtonWrapper = styled('div', {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  left: '0',
  right: '0',
  transition: 'opacity 0.3s linear 0.5s',
  variants: {
    ...hiddenVariants,
  },
  '@tablet': {
    position: 'unset',
  },
})

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

export default Header
