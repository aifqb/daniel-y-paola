// src/components/InfoBoda.js
import React from 'react';
import './InfoBoda.css';
import UbicacionLink from './components/UbicacionLink'; // Importa el nuevo componente

function InfoBoda() {
    // ¡REEMPLAZA ESTAS CON TUS URLs REALES DE GOOGLE MAPS!
    const iglesiaMapaUrl = 'https://maps.app.goo.gl/o3HzpkV8cpXeJFJ17';
    const localMapaUrl = 'https://maps.app.goo.gl/LG12MBGwnfWvusW9A';
  
    return (
      <div className="info-boda">
        <header className="cabecera">
          <h1 className="titulo-principal">Daniel & Paola</h1>
          <p className="subtitulo">¡Nos casamos!</p>
        </header>
  
        <section className="informacion-evento">
          <h2 className="seccion-titulo">Detalles del Evento</h2>
          <p className="texto-evento">Con la bendición de Dios y el amor de nuestras familias,</p>
          <p className="texto-evento">los invitamos a celebrar nuestro matrimonio.</p>
        </section>
  
        <section className="ubicaciones">
          <h2 className="seccion-titulo">Ubicaciones</h2>
          <UbicacionLink nombre="Ceremonia Religiosa" mapaUrl={iglesiaMapaUrl} />
          <UbicacionLink nombre="Recepción" mapaUrl={localMapaUrl} />
        </section>
  
        <section className="agradecimiento">
          <p className="texto-agradecimiento">Su presencia es el regalo más grande.</p>
          <p className="texto-agradecimiento">¡Los esperamos con alegría!</p>
        </section>
      </div>
    );
  }
  
  export default InfoBoda;