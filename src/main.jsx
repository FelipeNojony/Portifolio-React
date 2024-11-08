import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Portifolio from './pages/Portifolio/Portifolio'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="" element={<Portifolio />} />
    </Routes>
  </BrowserRouter>
)
