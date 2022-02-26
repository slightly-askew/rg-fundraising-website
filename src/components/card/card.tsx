import styled from '@theme'
import { Main } from '@layout'
import SectionWrapper from '@components/section-wrapper'

const Card = styled('article', {
  flex: 1,
  background: '$gray100',
  border: '1px solid $gray200',
  br: '$1',
  px: '$5',
  py: '$3',
  borderRadius: '$medium',
  //when I'm displayed in a grey section I have a white background
  [`${Main} ${SectionWrapper}:nth-child(odd) &`]: {
    background: '$white',
  },
})

export default Card
