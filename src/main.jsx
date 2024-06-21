import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/index.scss'
import '@fontsource-variable/platypi'; // Supports weights 300-800
import '@fontsource-variable/phudu'; // Supports weights 300-900
import '@fontsource-variable/inter'; 



import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
