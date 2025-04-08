// src/components/UbicacionLink.js
import React from 'react';
import './UbicacionLink.css';

function UbicacionLink({ nombre, mapaUrl }) {
  const abrirMapa = () => {
    window.open(mapaUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="ubicacion-link">
      <h3 className="ubicacion-nombre">{nombre}</h3>
      <button className="ver-mapa-btn" onClick={abrirMapa}>
        Ver ubicación
      </button>
    </div>
  );
}

export default UbicacionLink;