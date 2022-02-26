import styled from '@theme'
import Text from './text'

export function Paragraph({ childrenRaw, ...props }: any) {
  return <ParagraphStyle {...props} />
}

const ParagraphStyle = styled('p', Text, {
  lineHeight: 1 + 1 / 2,
})
