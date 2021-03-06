import React, {
  InputHTMLAttributes,
  useEffect,
  useState,
  useCallback,
  useRef,
} from 'react'
import { useField } from '@unform/core'
import { IconBaseProps } from 'react-icons'
import { FiAlertCircle } from 'react-icons/fi'

import * as Styled from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  icon: React.ComponentType<IconBaseProps>
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...restProps }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const { fieldName, defaultValue, error, registerField } = useField(name)

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)

    setIsFilled(!!inputRef.current?.value)
  }, [])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })
  }, [fieldName, registerField])

  return (
    <Styled.Container
      isErrored={!!error}
      isFilled={isFilled}
      isFocused={isFocused}
    >
      {Icon && <Icon />}
      <input
        ref={inputRef}
        defaultValue={defaultValue}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...restProps}
      />
      {error && (
        <Styled.Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Styled.Error>
      )}
    </Styled.Container>
  )
}

export default Input
