import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from 'styled-components'
import Theme from './assets/styles/theme.ts'
import GlobalStyle from './assets/styles/globalStyles.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}> 
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
)
