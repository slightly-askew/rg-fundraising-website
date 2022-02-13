import { styled } from '@theme'
import Image from 'next/image'
import Link from 'next/link'
import MaxWidthWrapper from '@components/max-width-wrapper'
import Button from '@components/button'

export interface HeaderProps {}

function Header({}: HeaderProps): JSX.Element {
  return (
    <Wrapper>
      <Link href="/" passHref>
        <ImageWrapper>
          <Image
            src="/svg/rg-logo.svg"
            alt="RG Fundraising Logo"
            layout="fill"
          />
        </ImageWrapper>
      </Link>
      <Button>Get in touch</Button>
    </Wrapper>
  )
}

const Wrapper = styled('header', MaxWidthWrapper, {
  display: 'flex',
  justifyContent: 'space-between',
  pt: '$4',
  pb: '$3',
})

const ImageWrapper = styled('a', {
  position: 'relative',
  height: '24px',
  flexBasis: '156px',
  alignSelf: 'center',
  '@tablet': {
    height: '32px',
    flexBasis: '208px',
  },
  '@desktop': {
    height: '48px',
    flexBasis: '310px',
  },
})

export default Header
