import React from 'react';
import './MapaEmbed.css';

function MapaEmbed({ nombre, embedCode }) {
  return (
    <div className="mapa-embed">
      <h3>{nombre}</h3>
      <div className="mapa-responsive">
        <div dangerouslySetInnerHTML={{ __html: embedCode }} />
      </div>
    </div>
  );
}

export default MapaEmbed;