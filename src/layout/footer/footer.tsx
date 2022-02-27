import { styled } from '@theme'
import MaxWidthWrapper from '@components/max-width-wrapper'
import RgLogo from '@components/rg-logo'
import Link from 'next/link'
import { Paragraph } from '@typography'
import Button from '@components/button'

export interface FooterProps {}

function Footer({}: FooterProps): JSX.Element {
  return (
    <FooterWrapper>
      <FooterMaxWidthWrapper>
        <FooterRgLogo theme="dark" size="small" />
        <nav>
          <FooterNavItemWrapper>
            <Link href="/" passHref>
              <NavLinkButton>Home</NavLinkButton>
            </Link>
            <Link href="/privacy" passHref>
              <NavLinkButton>Privacy Policy</NavLinkButton>
            </Link>
          </FooterNavItemWrapper>
        </nav>
        <Copyright>© RG Fundraising. All rights reserved.</Copyright>
      </FooterMaxWidthWrapper>
    </FooterWrapper>
  )
}

const FooterMaxWidthWrapper = styled(MaxWidthWrapper, {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '$3',
})

const NavLinkButton = styled('a', Button, {
  background: 'transparent',
  p: '$1',
  color: '$gray200',
  textDecoration: 'none',
  borderRadius: '$medium',
  '&:hover': {
    background: '$gray800',
    color: '$gray100',
  },
})

const FooterRgLogo = styled(RgLogo, {
  pr: '$4',
})

const FooterNavItemWrapper = styled('ul', {
  display: 'flex',
  gap: '$4',
  alignItems: 'baseline',
  pl: 0,
  m: 0,
  listStyle: 'none',
  '@tablet': {
    pt: '$2',
  },
})

const FooterWrapper = styled('footer', {
  background: '$black',
  py: '$5',
})

const Copyright = styled(Paragraph, {
  color: '$gray500',
  fontSize: '0.875rem',
  flex: '0 0 100%',
  mt: '$2',
})

export default Footer
