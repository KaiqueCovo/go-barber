import React, { InputHTMLAttributes } from 'react'
import { IconBaseProps } from 'react-icons'

import * as Styled from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  icon: React.ComponentType<IconBaseProps>
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...restProps }) => {
  return (
    <Styled.Container>
      {Icon && <Icon />}
      <input {...restProps}></input>
    </Styled.Container>
  )
}

export default Input
