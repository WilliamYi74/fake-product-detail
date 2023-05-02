import { ReactElement } from 'react'
import styled from 'styled-components'
import Head from './head'
type LayoutProps = {
  children: ReactElement
}
const Section = styled.section`
  width: 100vw;
  height: 100%;
`
const Layout = ({ children }: LayoutProps) => {
  return (
    <Section>
      <Head />
      {children}
    </Section>
  )
}
export default Layout
