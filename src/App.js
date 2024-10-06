// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExploradorIntergalactico from './components/menu';
import AventuraEspacial from './components/AventuraEspacial';
import CarruselExoplanetas from './components/CarruselExoplanetas'; 
import SeleccionIdioma from './components/SeleccionIdioma';
import Recursos from './components/Recursos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ExploradorIntergalactico />} />
        <Route path="/aventura" element={<AventuraEspacial />} />
        <Route path="/carrusel" element={<CarruselExoplanetas />} /> 
        <Route path="/idioma" element={<SeleccionIdioma />} /> 
        <Route path="/recursos" element={<Recursos />} /> 
      </Routes>
    </Router>
  );
}

export default App;
