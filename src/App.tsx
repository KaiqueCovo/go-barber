import React from 'react'

import GlobalStyle from './styles/global'
import GlobalProvider from './hooks'

import SignIn from './pages/SignIn'
// import SignUp from './pages/SignUp'

function App() {
  return (
    <>
      <GlobalProvider>
        <SignIn />
      </GlobalProvider>

      <GlobalStyle />
    </>
  )
}

export default App
