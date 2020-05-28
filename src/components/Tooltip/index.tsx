import React from 'react'

import * as Styled from './styles'

interface TooltipProps {
  title: string
  className?: string
}

const Tootip: React.FC<TooltipProps> = ({ title, className, children }) => {
  return (
    <Styled.Container className={className}>
      {children}
      <span>{title}</span>
    </Styled.Container>
  )
}

export default Tootip
