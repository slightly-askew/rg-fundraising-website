import Head from 'next/head'
import { Awaited } from '@utils/types'
import Layout from 'src/layout'
import Hero from '@templates/hero'
import BlockRenderer from '@templates/BlockRenderer'
import request from '@lib/tina-cms'
import { GetPageQuery } from '@lib/tina-cms/__generated__/types'
import { useTina } from 'tinacms/dist/edit-state'
import TinaMarkdown from '@components/tina-markdown/TinaMarkdown'
//import { ExperimentalGetTinaClient } from '../../.tina/__generated__/types'

type StaticProps = Awaited<ReturnType<typeof getStaticProps>>['props']

function Home(props: StaticProps) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  })
  const {
    getPageDocument: { data: content },
  } = data
  return (
    <>
      <Head>
        <title>{content.seo_data?.meta_title}</title>
        {content.seo_data?.meta_description && (
          <meta
            name="description"
            content={content.seo_data.meta_description}
          />
        )}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero
          heading={content.hero?.hero_heading || ''}
          description={
            content.hero?.hero_description && (
              //@ts-expect-error Markdown type
              <TinaMarkdown>{content.hero?.hero_description}</TinaMarkdown>
            )
          }
          button_text={content.hero?.hero_button_text}
        />
        {/*@ts-expect-error difficult to type property */}
        <BlockRenderer blocks={content.blocks} />
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const variables = {
    relativePath: 'home.mdx',
  }

  const pageData = await request<GetPageQuery>({
    query: 'getPage',
    variables,
  })

  return {
    props: {
      ...pageData,
    },
  }
  /*
  // Auto generated GQL client - not recommended for production yet
  const client = ExperimentalGetTinaClient()
  const tinaProps = await client.getPageDocument({
    relativePath: 'home.mdx',
  })
  return { props: { ...tinaProps } }
  */
}

export default Home
