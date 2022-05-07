import React from 'react'
import ReactDOM from 'react-dom/client'
import ReactRoutes from './routes/Routes'
import './styles/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <ReactRoutes />
  </React.StrictMode>
)