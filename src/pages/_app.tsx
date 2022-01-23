import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { globalStyles } from '../theme/global'
import { TinaEditProvider } from 'tinacms/dist/edit-state'
const TinaCMS = dynamic(() => import('tinacms'), { ssr: false })
import { LazyMotion, domAnimation } from 'framer-motion'

const App = ({ Component, pageProps }: AppProps) => {
  globalStyles()
  return (
    <>
      <TinaEditProvider
        editMode={
          <TinaCMS
            clientId={process.env.NEXT_PUBLIC_TINA_CLIENT_ID}
            branch={process.env.NEXT_PUBLIC_EDIT_BRANCH}
            isLocalClient={Boolean(
              Number(process.env.NEXT_PUBLIC_USE_LOCAL_CLIENT ?? true)
            )}
            {...pageProps}
          >
            {(livePageProps: any) => <Component {...livePageProps} />}
          </TinaCMS>
        }
      >
        <LazyMotion features={domAnimation}>
          <Component {...pageProps} />
        </LazyMotion>
      </TinaEditProvider>
    </>
  )
}

export default App
