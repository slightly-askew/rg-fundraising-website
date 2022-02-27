import styled from '@theme'
import React from 'react'

interface TextGreenifyProps {
  children?: string | null
}

function TextGreenify({ children }: TextGreenifyProps) {
  if (children) {
    //split out _underscored_ text into capture groups
    const _children_ = children.split(/_([^_]+)_/gi)
    return (
      <>
        {_children_.map((part, i) => (
          <React.Fragment key={part}>
            {
              //odd entries in the array will match the capture group above
              i % 2 === 0 ? part : <Green>{part}</Green>
            }
          </React.Fragment>
        ))}
      </>
    )
  }
  return null
}

export const Green = styled('span', { color: '$primaryGreen' })

export default TextGreenify
