import styled from '@theme'
import Text from './text'

export function Paragraph({ childrenRaw, ...props }: any) {
  return <ParagraphStyle {...props} />
}

export const ParagraphStyle = styled('p', Text, {
  lineHeight: 1 + 1 / 2,
  variants: {
    size: {
      large: {
        fontSize: '1.5rem',
        fontWeight: '500',
        letterSpacing: '-0.0125em',
      },
    },
  },
})
