import styled from '@theme'
import Text from './text'

export function Paragraph({ childrenRaw, ...props }: any) {
  return <P {...props} />
}

const P = styled('p', Text, {
  lineHeight: 1 + 1 / 2,
})

export default Paragraph
