import React, { useState, createContext, useContext, useCallback } from 'react'
import api from '../services/api'

interface SignInCredentials {
  email: string
  password: string
}

interface AuthContextData {
  user: object
  signIn(credentials: SignInCredentials): Promise<void>
  signOut(): void
}

interface AuthData {
  user: object
  token: string
}

/**
 * Create Context
 */
const AuthContext = createContext<AuthContextData>({} as AuthContextData)

/**
 * Provider
 */
const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthData>(() => {
    const token = localStorage.getItem('@GoBarber:token')
    const user = localStorage.getItem('@GoBarber:user')

    if (token && user) {
      return {
        token,
        user: JSON.parse(user),
      }
    }

    return {} as AuthData
  })

  /**
   * Method sign in
   */
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post<AuthData>('sessions', {
      email,
      password,
    })

    const { user, token } = response.data

    localStorage.setItem('@GoBarber:token', token)
    localStorage.setItem('@GoBarber:user', JSON.stringify(user))

    setData({ token, user })
  }, [])

  /**
   * Method log out
   */
  const signOut = useCallback(() => {
    localStorage.removeItem('@GoBarber:token')
    localStorage.removeItem('@GoBarber:user')

    setData({} as AuthData)
  }, [])

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

/**
 * Auth Hook
 */
function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}

export { AuthProvider, useAuth }
