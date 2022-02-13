import { styled } from '@theme'
import React from 'react'
import Header from '@templates/header'
import Footer from '@templates/footer'
import MaxWidthWrapper from '@components/max-width-wrapper'

export interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
      <Footer>I am the footer</Footer>
    </Wrapper>
  )
}

const Wrapper = styled('div', {
  display: 'flex',
  minHeight: '100%',
  backgroundColor: '$light',
  flexDirection: 'column',
  justifyContent: 'stretch',
})

const Main = styled('main', {
  flexGrow: 1,
})

export default Layout
