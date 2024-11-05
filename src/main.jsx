import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Portifolio from './pages/Portifolio/Portifolio'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Portifolio/>
  </StrictMode>,
)
