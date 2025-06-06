import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";

import Site from './pages/Site/index.jsx';
import Agendamento from './pages/Agendamento.jsx';
import Servicos from './pages/Servicos.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Site />} />
      <Route path="/site" element={<Site />} />
      <Route path="/agendamento" element={<Agendamento />} />
      <Route path="/servicos" element={<Servicos />} />
    </Routes>
  </BrowserRouter>
)

