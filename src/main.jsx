import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Portifolio from './pages/Portifolio/Portifolio'

import { register } from 'swiper/element/bundle'

register ();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="" element={<Portifolio />} />      
    </Routes>
  </BrowserRouter>
)
