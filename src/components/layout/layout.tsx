import { styled } from '@theme'
import React from 'react'
import Header from '../sections/header'
import Footer from '../sections/footer'
import MaxWidthWrapper from '@layout/max-width-wrapper'

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
  minHeight: '100%',
  backgroundColor: '$light',
  flexDirection: 'column',
  justifyContent: 'stretch',
})

const Main = styled('main', {
  flexGrow: '1',
})

export default Layout
