import Layout from '@layout'
import Hero from '@templates/hero'
import Head from 'next/head'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 | RG-Fundraising</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero
          heading="Page _Not Found_"
          description="Sorry, the page you were looking for no longer exists."
          fillHeight
        />
      </Layout>
    </>
  )
}
