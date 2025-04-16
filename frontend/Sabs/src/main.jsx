import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../bootstrap-5.3.3-dist/css/bootstrap.min.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
    <App />
  </StrictMode>
  </BrowserRouter>
,
)
