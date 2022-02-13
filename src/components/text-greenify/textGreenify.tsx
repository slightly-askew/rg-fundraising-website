import styled from '@theme'
import React from 'react'

interface TextGreenifyProps {
  children?: string | null
}

function TextGreenify({ children }: TextGreenifyProps) {
  if (children) {
    const _children = children.split(/_([^_]+)_/gi)
    return (
      <>
        {_children.map((part, i) => (
          <React.Fragment key={part}>
            {i % 2 === 0 ? part : <Green>{part}</Green>}
          </React.Fragment>
        ))}
      </>
    )
  }
  return null
}

export const Green = styled('span', { color: '$primaryGreen' })
export default TextGreenify
