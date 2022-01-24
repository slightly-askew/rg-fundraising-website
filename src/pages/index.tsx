import Head from 'next/head'
import { Awaited } from '@utils/types'
import request from '@lib/tina-cms'
import Layout from 'src/layout'
import Hero from '@templates/hero'
import OurServices from '@templates/our-services'
import PoweredByData from '@templates/powered-by-data'
import WhyRg from '@templates/why-rg'
import MeetTheTeam from '@templates/meet-the-team'
import WhoWeWorkWith from '@templates/who-we-work-with'
import CallToAction from '@templates/call-to-action'
import { GetHomepageQuery } from '@lib/tina-cms/__generated__/types'

type StaticProps = Awaited<ReturnType<typeof getStaticProps>>['props']

function Home({ data }: StaticProps) {
  const {
    getPagesDocument: { data: content },
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
        <OurServices />
        <PoweredByData />
        <WhyRg />
        <MeetTheTeam />
        <WhoWeWorkWith />
        <CallToAction />
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const variables = {
    relativePath: 'home.md',
  }

  const pageData = await request<GetHomepageQuery>({
    query: 'getHomepage',
    variables,
  })

  return {
    props: {
      ...pageData,
    },
  }
}

export default Home
