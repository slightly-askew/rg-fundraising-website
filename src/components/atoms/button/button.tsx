export interface ButtonProps {
  children: React.ReactNode
}

function Button({ children }: ButtonProps) {
  return <button>{children}</button>
}

export default Button
