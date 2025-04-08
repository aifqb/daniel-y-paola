import React from 'react';
import './InfoBoda.css';
import MapaEmbed from './components/MapaEmbed'; // Asegúrate de que la ruta sea correcta según tu estructura de carpetas

function InfoBoda() {
  // ¡REEMPLAZA ESTOS CON TUS CÓDIGOS IFRAME REALES DE GOOGLE MAPS!
  const iglesiaEmbedCode = '<iframe src="https://maps.app.goo.gl/Zn42kK22c2F13Ejz7"></iframe>';
  const localEmbedCode = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.832788785479!2d-68.15781428512498!3d-16.49899478869828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1ses-419!2sbo!4v1712600018648!5m2!1ses-419!2sbo" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

  return (
    <div className="info-boda">
      <header className="cabecera">
        <h1>Queremos unir nuestras vidas delante de Dios,</h1>
        <h1>y caminar juntos en bendición siempre...</h1>
        <p className="nombres">Paola & Daniel</p>
        <p className="bendicion">Con la bendición de Dios y nuestros padres</p>
      </header>

      <div className="padres">
        <p>Fabiana Yujra Mamani</p>
        <p>Fernando Nacho G. Yujra (Hno.)</p>
        <p>Alejandro Quisbert Barrientos (†)</p>
        <p>Esperanza Burgoa de Quisbert</p>
      </div>

      <div className="ubicaciones">
        <h2>Ubicaciones:</h2>
        <MapaEmbed nombre="Ceremonia Religiosa" embedCode={iglesiaEmbedCode} />
        <MapaEmbed nombre="Recepción" embedCode={localEmbedCode} />
      </div>

      <div className="agradecimiento">
        <p>¡Los esperamos para compartir este día especial!</p>
      </div>
    </div>
  );
}

export default InfoBoda;