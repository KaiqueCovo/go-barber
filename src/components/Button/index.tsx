import React, { ButtonHTMLAttributes } from 'react'

import * as Styled from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = ({ children, ...restProps }) => {
  return <Styled.Container {...restProps}>{children}</Styled.Container>
}

export default Button
