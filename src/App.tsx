import React from 'react'

import { AuthProvider } from './context/AuthContext'

import GlobalStyle from './styles/global'

import SignIn from './pages/SignIn'
// import SignUp from './pages/SignUp'

function App() {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>
      <GlobalStyle />
    </>
  )
}

export default App
