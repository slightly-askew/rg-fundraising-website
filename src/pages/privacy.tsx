import Head from 'next/head'
import { Awaited } from '@utils/types'
import request from '@lib/tina-cms'
import Layout from 'src/layout'
import Hero from '@templates/hero'
import { GetPrivacyPageQuery } from '@lib/tina-cms/__generated__/types'
import MaxWidthWrapper from '@components/max-width-wrapper'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import { useTina } from 'tinacms/dist/edit-state'

type StaticProps = Awaited<ReturnType<typeof getStaticProps>>['props']

function PrivacyPage(props: StaticProps) {
  console.log(props.query)
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  })
  const {
    getPrivacyDocument: { data: content },
  } = data
  return (
    <>
      <Head>
        <title>{content.seo_data?.meta_title}</title>
        <meta
          name="description"
          //@ts-expect-error possible null value
          content={content.seo_data?.meta_description}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero
          heading={content.hero?.hero_heading}
          description={content.hero?.hero_description}
          button_text={content.hero?.hero_button_text}
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

  const pageData = await request<GetPrivacyPageQuery>({
    query: 'getPrivacyPage',
    variables,
  })

  return {
    props: {
      ...pageData,
    },
  }
}

export default PrivacyPage
