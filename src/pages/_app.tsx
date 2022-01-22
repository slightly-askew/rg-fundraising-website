import type { AppProps } from 'next/app'
import { LazyMotion, domAnimation } from 'framer-motion'
import { globalStyles } from '../theme/global'

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()
  return (
    <LazyMotion features={domAnimation}>
      <Component {...pageProps} />
    </LazyMotion>
  )
}

export default MyApp
