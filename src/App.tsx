import React from 'react'

import AuthContext from './context/AuthContext'

import GlobalStyle from './styles/global'

import SignIn from './pages/SignIn'
// import SignUp from './pages/SignUp'

function App() {
  return (
    <>
      <AuthContext.Provider value={{ name: 'Diego' }}>
        <SignIn />
      </AuthContext.Provider>
      <GlobalStyle />
    </>
  )
}

export default App
