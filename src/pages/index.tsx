import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '@layout'
import Hero from '@sections/hero'
import OurServices from '@sections/our-services'
import PoweredByData from '@sections/powered-by-data'
import WhyRg from '@sections/why-rg'
import MeetTheTeam from '@sections/meet-the-team'
import WhoWeWorkWith from '@sections/who-we-work-with'
import CallToAction from '@sections/call-to-action'

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
