import styled from '@theme'
import { TinaMarkdown, TinaMarkdownContent } from 'tinacms/dist/rich-text'

interface Props {
  children: TinaMarkdownContent | TinaMarkdownContent[]
}

//overrride italics as Green text
const Green = styled('span', { color: '$primaryGreen' })

const components = {
  italic: Green,
}

function ConfiguredMarkdown({ children }: Props) {
  return (
    <TinaMarkdown
      content={children}
      //@ts-expect-error possibly undefined issues
      components={components}
    />
  )
}

export default ConfiguredMarkdown
