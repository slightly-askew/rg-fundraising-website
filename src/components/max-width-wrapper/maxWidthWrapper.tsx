import { styled } from '@theme'

const MaxWidthWrapper = styled('div', {
  width: '100%',
  maxWidth: '1440px',
  mx: 'auto',
  px: '$4',
  '@tablet': { px: '$5' },
  '@laptop': { px: '$6' },
})

export default MaxWidthWrapper
