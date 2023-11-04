import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {QueryClient, QueryClientProvider} from 'react-query';
import { ThemeProvider } from 'styled-components'
import Theme from './assets/styles/theme.ts'
import GlobalStyle from './assets/styles/globalStyles.ts'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <QueryClientProvider client={queryClient}>
        <App />
        <GlobalStyle />
      </QueryClientProvider> 
    </ThemeProvider>
  </React.StrictMode>,
)
