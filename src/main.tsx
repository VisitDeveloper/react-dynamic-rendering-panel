import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './assets/global.css'
import ThemeProviders from 'config/theme/ThemeProvider.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProviders>
      <App />
    </ThemeProviders>
  </React.StrictMode>,
)
  