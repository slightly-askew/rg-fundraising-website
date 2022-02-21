import { Paragraph } from '@components/typography'
import { Green } from '@components/text-greenify'
import {
  Components,
  TinaMarkdown,
  TinaMarkdownContent,
} from 'tinacms/dist/rich-text'

interface Props {
  children: TinaMarkdownContent | TinaMarkdownContent[]
}

const components: Components<{}> = {
  //@ts-expect-error
  italic: Green,
  //@ts-expect-error
  p: Paragraph,
}

function ConfiguredMarkdown({ children }: Props) {
  return <TinaMarkdown content={children} components={components} />
}

export default ConfiguredMarkdown
