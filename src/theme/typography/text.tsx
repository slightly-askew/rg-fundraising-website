import styled from '@theme'

export const Text = styled('span', {
  fontSize: '20px',
  color: '$gray800',
  variants: {
    align: {
      center: {
        textAlign: 'center',
      },
      right: {
        textAlign: 'right',
      },
    },
  },
})

export default Text
