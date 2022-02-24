import { styled } from '@theme'
import React from 'react'
import Header from '@layout/header'
import Footer from '@layout/footer'

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
