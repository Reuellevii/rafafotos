import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/global.css'

// Avisa o CSS que o JavaScript está ativo (as animações de entrada só rodam com JS)
document.documentElement.classList.add('js')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
