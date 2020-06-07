import React from 'react'

import Toast from './components/Toast'

import * as Styled from './styles'

import { ToastMessage } from '../../hooks/Toast'
interface ToastContainerProps {
  messages: ToastMessage[]
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  return (
    <Styled.Container>
      {messages.map((message) => (
        <Toast key={message.id} message={message} />
      ))}
    </Styled.Container>
  )
}

export default ToastContainer
