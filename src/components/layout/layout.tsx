import Head from 'next/head'
import { ReactElement } from 'react'
import styled from 'styled-components'
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
      <Head>
        <title>康麦斯</title>
        <meta name="description" content="康麦斯" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </Section>
  )
}
export default Layout
