import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/RootLayout.css'
import './style/ProductLayout.css'
import './style/home.css'
import './style/product.css'
import './style/error.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)