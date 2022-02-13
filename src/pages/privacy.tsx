import Head from 'next/head'
import { Awaited } from '@utils/types'
import request from '@lib/tina-cms'
import Layout from 'src/layout'
import Hero from '@templates/hero'
import { GetLegalPageQuery } from '@lib/tina-cms/__generated__/types'
import MaxWidthWrapper from '@components/max-width-wrapper'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import { useTina } from 'tinacms/dist/edit-state'
//import { ExperimentalGetTinaClient } from '../../.tina/__generated__/types'

type PageProps = Awaited<ReturnType<typeof getStaticProps>>['props']

function PrivacyPage(props: PageProps) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  })
  const {
    getLegalDocument: { data: content },
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
          heading={content.hero?.hero_heading}
          description={content.hero?.hero_description}
        />
        <MaxWidthWrapper>
          <TinaMarkdown content={content.body} />
        </MaxWidthWrapper>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const variables = {
    relativePath: 'privacy.mdx',
  }

  const pageData = await request<GetLegalPageQuery>({
    query: 'getLegalPage',
    variables,
  })

  return {
    props: {
      ...pageData,
    },
  }
  /* Auto generated GQL client - not recommended for production yet

  const client = ExperimentalGetTinaClient()
  const tinaProps = await client.getLegalDocument({
    relativePath: 'privacy.mdx',
  })

  return { props: { ...tinaProps } }*/
}

export default PrivacyPage
