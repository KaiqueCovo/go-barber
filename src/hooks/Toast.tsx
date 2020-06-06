import React, { useCallback, createContext, useContext } from 'react'

import ToastContainer from '../components/ToastContainer'

interface ToastContextData {
  addToast(): void
  removeToast(): void
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData)

const ToastProvider: React.FC = ({ children }) => {
  /**
   * Method add toast
   */
  const addToast = useCallback(() => {
    console.log('add')
  }, [])

  /**
   * Method remove toast
   */
  const removeToast = useCallback(() => {
    console.log('remove')
  }, [])

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  )
}

function useToast(): ToastContextData {
  const context = useContext(ToastContext)

  if (!ToastContext) {
    throw new Error('useToast must be used within a ToastProvider')
  }

  return context
}

export { ToastProvider, useToast }
