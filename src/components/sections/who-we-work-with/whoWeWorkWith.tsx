import Image from 'next/image'
import MaxWidthWrapper from '@layout/max-width-wrapper'
import VisuallyHidden from '@atoms/visually-hidden'

export interface WhoWeWorkWithProps {}

function WhoWeWorkWith({}) {
  return (
    <section>
      <MaxWidthWrapper>
        <h1>Who do we work with?</h1>
        <p>We work with some of the best brands in Australia.</p>
        <ul>
          <li>
            <article>
              <VisuallyHidden as="h2">
                Royal Flying Doctor Service
              </VisuallyHidden>
              <Image
                alt="The Logo of the Royal Flying Doctor Service"
                src="/svg/royal-flying-doctor-logo.svg"
                height={100}
                width={100}
              ></Image>
            </article>
          </li>
          <li>
            <article>
              <VisuallyHidden as="h2">Medecins Sans Frontieres</VisuallyHidden>
              <Image
                alt="The Logo of Medecins Sans Frontieres"
                src="/svg/medecins-sans-frontieres-logo.svg"
                height={100}
                width={100}
              ></Image>
            </article>
          </li>
          <li>
            <article>
              <VisuallyHidden as="h2">
                World Wide Funds for Nature (WWF)
              </VisuallyHidden>
              <Image
                alt="The Logo of WWF"
                src="/svg/wwf-logo.svg"
                height={100}
                width={100}
              ></Image>
            </article>
          </li>
        </ul>
      </MaxWidthWrapper>
    </section>
  )
}

export default WhoWeWorkWith
