import Head from 'next/head'
import { Awaited } from '@utils/types'
import Layout from 'src/layout'
import Hero from '@templates/hero'
import BlockRenderer from '@templates/BlockRenderer'
import request from '@lib/tina-cms'
import { GetPageQuery } from '@lib/tina-cms/__generated__/types'
import { useTina } from 'tinacms/dist/edit-state'
import TinaMarkdown from '@components/tina-markdown/TinaMarkdown'

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
              <TinaMarkdown paragraphSize="large">
                {content.hero?.hero_description}
              </TinaMarkdown>
            )
          }
          imageAlt={content.hero?.hero_image_alt}
          imageSrc={content.hero?.hero_image}
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
}

export default Home
