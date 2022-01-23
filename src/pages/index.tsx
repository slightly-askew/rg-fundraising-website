import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from 'src/layout'
import Hero from '@templates/hero'
import OurServices from '@templates/our-services'
import PoweredByData from '@templates/powered-by-data'
import WhyRg from '@templates/why-rg'
import MeetTheTeam from '@templates/meet-the-team'
import WhoWeWorkWith from '@templates/who-we-work-with'
import CallToAction from '@templates/call-to-action'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>RG Fundraising</title>
        <meta
          name="description"
          content="Your regular giving fundraising team"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero />
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

export default Home
