import styled from '@theme'
import { Main } from '@layout'

const SectionWrapper = styled('section', {
  minHeight: 'min(640px,40vh)',
  background: '$gray100',
  display: 'flex',
  alignItems: 'center',
  [`${Main} &:nth-child(even)`]: {
    background: '$white',
  },
})

export default SectionWrapper
