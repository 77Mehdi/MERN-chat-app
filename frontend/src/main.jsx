import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvader } from './context/AuthContext.jsx'
import { SocketContextProvider } from './context/socketContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
      <AuthContextProvader>
        <SocketContextProvider>
          <App />
        </SocketContextProvider>
      </AuthContextProvader>
    </BrowserRouter>

  </React.StrictMode>
)
