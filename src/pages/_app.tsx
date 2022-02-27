import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { globalStyles } from '../theme/global'
import { TinaEditProvider } from 'tinacms/dist/edit-state'
import { TinaCloudCloudinaryMediaStore } from 'next-tinacms-cloudinary'
import { LazyMotion, domAnimation } from 'framer-motion'

const TinaCMS = dynamic(() => import('tinacms'), { ssr: false })

const App = ({ Component, pageProps }: AppProps) => {
  globalStyles()
  return (
    <LazyMotion features={domAnimation}>
      <TinaEditProvider
        editMode={
          <TinaCMS
            clientId={process.env.NEXT_PUBLIC_TINA_CLIENT_ID}
            branch={process.env.NEXT_PUBLIC_EDIT_BRANCH}
            mediaStore={TinaCloudCloudinaryMediaStore}
            isLocalClient={Boolean(
              Number(process.env.NEXT_PUBLIC_USE_LOCAL_CLIENT ?? true)
            )}
            cmsCallback={(cms) => {
              import('react-tinacms-editor').then((field) => {
                cms.plugins.add(field.MarkdownFieldPlugin)
              })
            }}
            {...pageProps}
            apiURL="http://localhost:4001/graphql"
            className="meh"
          >
            {(livePageProps: any) => <Component {...livePageProps} />}
          </TinaCMS>
        }
      >
        <Component {...pageProps} />
      </TinaEditProvider>
    </LazyMotion>
  )
}

export default App
