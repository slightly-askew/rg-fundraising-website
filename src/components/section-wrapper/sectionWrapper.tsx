import styled from '@theme'
import { Main } from '@layout'

const SectionWrapper = styled('section', {
  position: 'relative',
  minHeight: 'min(640px,40vh)',
  background: '$gray100',
  display: 'flex',
  alignItems: 'center',
  py: '$6',
  //when I'm listed in a Main Component I alternate my bg color
  [`${Main} &:nth-child(even)`]: {
    background: '$white',
  },
})

export default SectionWrapper
