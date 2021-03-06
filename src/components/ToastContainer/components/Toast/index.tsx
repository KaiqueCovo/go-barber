import React, { useEffect } from 'react'
import { FiAlertCircle, FiCheckCircle, FiInfo, FiXCircle } from 'react-icons/fi'

import * as Styled from './styles'

import { ToastMessage, useToast } from '../../../../hooks/Toast'

interface ToastProps {
  message: ToastMessage
  style: object
}

const icons = {
  info: <FiInfo size={24} />,
  success: <FiCheckCircle size={24} />,
  error: <FiAlertCircle size={24} />,
}

const Toast: React.FC<ToastProps> = ({ message, style }) => {
  const toast = useToast()

  useEffect(() => {
    const timer = setTimeout(() => {
      toast.removeToast(message.id)
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [message.id, toast])

  return (
    <Styled.Container
      type={message.type}
      hasDescription={!!message.description}
      style={style}
    >
      {icons[message.type || 'info']}
      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button type="button" onClick={() => toast.removeToast(message.id)}>
        <FiXCircle size={18} />
      </button>
    </Styled.Container>
  )
}

export default Toast
