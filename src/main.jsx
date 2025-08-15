import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Second from './components/second.jsx'
import Third from './components/third.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <br />
    <br />
    <Second />
    <br /><br />
    <Third />
  </StrictMode>,
)
