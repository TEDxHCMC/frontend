import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/index.scss'
import '@fontsource-variable/platypi'; // Supports weights 300-800
import '@fontsource-variable/phudu'; // Supports weights 300-900
import '@fontsource-variable/inter'; 

import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom'

import { store } from "./redux/store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
