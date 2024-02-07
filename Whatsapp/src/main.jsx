import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import AuthContextProvider from "./context/auth"

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
  <GoogleOAuthProvider clientId="878980880399-3pppau4mbmj3fqbbthk0f9khq2gk34hi.apps.googleusercontent.com">
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </GoogleOAuthProvider>
  </AuthContextProvider>,
)
