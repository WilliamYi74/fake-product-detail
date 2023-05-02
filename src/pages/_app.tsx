import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '../components/common/global-styles'
import Layout from '@/components/layout/layout'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
// App的props类型
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
// next的页面组件类型
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
export const registerLayout = (Component: NextPageWithLayout<any>) => {
  Component.getLayout = (page: ReactElement) => {
    return <Layout>{page}</Layout>
  }
}
const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // 有getLayout则是单页应用则获取布局组件 渲染到布局组件 没有就直接渲染页面组件
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
