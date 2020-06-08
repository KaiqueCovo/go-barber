import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import GlobalStyle from './styles/global'
import GlobalProvider from './hooks'

import Routes from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes />
      </GlobalProvider>

      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App
