import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PaginaInicio } from './paginas/Inicio.pagina';
import { PaginaFavoritos } from './paginas/Favoritos.pagina';
import { PaginaDetalle } from './paginas/Detalle.pagina'; // Importa el componente de detalle

export const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="favoritos" element={<PaginaFavoritos />} />
        <Route path="detalle/:id" element={<PaginaDetalle />} />
      </Routes>
    </div>
  );
};
