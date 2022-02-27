import * as Stitches from '@stitches/react'
import { Paragraph, ParagraphStyle } from '@typography'
import { Green } from '@components/text-greenify'
import {
  Components,
  TinaMarkdown,
  TinaMarkdownContent,
} from 'tinacms/dist/rich-text'
import React, { useMemo } from 'react'

interface ComponentConfig {
  paragraphSize?: Stitches.VariantProps<typeof ParagraphStyle>['size']
}
interface Props extends ComponentConfig {
  children: TinaMarkdownContent | TinaMarkdownContent[]
}

function makeComponentConfig({
  paragraphSize,
}: ComponentConfig): Components<{}> {
  const P = (props: React.ComponentProps<typeof Paragraph>) => (
    <Paragraph {...props} size={paragraphSize} />
  )
  return {
    //@ts-expect-error
    italic: Green,
    p: P,
  }
}

function ConfiguredMarkdown({ children, paragraphSize }: Props) {
  const components = useMemo(
    () => makeComponentConfig({ paragraphSize }),
    [paragraphSize]
  )
  return <TinaMarkdown content={children} components={components} />
}

export default ConfiguredMarkdown
