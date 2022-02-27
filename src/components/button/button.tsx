import React from 'react'
import styled from '@theme'
import { Text } from '@typography'

export interface ButtonProps {
  children: React.ReactNode
}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { children },
  ref
) {
  return <BtnWrapper ref={ref}>{children}</BtnWrapper>
})

export const BtnWrapper = styled('button', Text, {
  outline: 'none',
  border: 'none',
  width: 'max-content',
  background: '$primaryGreen',
  color: '$white',
  fontWeight: 600,
  borderRadius: '$medium',
  position: 'relative',
  lineHeight: '24px',
  py: '$2',
  px: '$3',
  '@tablet': {
    py: '$2',
    px: '$4',
  },
  '@laptop': {
    py: '$3',
    px: '$5',
  },
  '&:hover': {
    background: '$primaryLightGreen',
  },
  '&:active': {
    background: '$primaryDarkGreen',
  },
  '&:focus:': {
    '&:before': {
      position: 'absolute',
      content: '',
      tlbr: '-$1',
      borderRadius: '$large',
      border: '2px solid orange',
    },
  },
})

export default Button
