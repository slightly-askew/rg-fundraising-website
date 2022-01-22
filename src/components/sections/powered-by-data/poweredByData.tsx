import MaxWidthWrapper from '@layout/max-width-wrapper'

export interface PoweredByDataProps {}

function PoweredByData({}) {
  return (
    <section>
      <MaxWidthWrapper>
        <h1>Powered By Data</h1>
        <p>
          Data has become the most valuable resource in the world, and
          we&apos;re powered by it.
        </p>
        <p>
          All our data is anonymised, transparent and available to analyse when
          you want.
        </p>
        <p>
          If that&apos;s not your thing though, we will summarise the insights
          each week.
        </p>
      </MaxWidthWrapper>
    </section>
  )
}

export default PoweredByData
