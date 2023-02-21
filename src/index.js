import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter ,Routes ,Route} from 'react-router-dom'
import App from './App';
import Contact from './Contact';
import About from './About';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
  
    </BrowserRouter>
  </StrictMode>
);
