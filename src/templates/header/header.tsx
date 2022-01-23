import { styled } from '@theme'
import MaxWidthWrapper from '@components/max-width-wrapper'
import Button from '@components/button'

export interface HeaderProps {}

function Header({}: HeaderProps): JSX.Element {
  return (
    <Wrapper>
      <div>RG Fundraising</div>
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

export default Header
