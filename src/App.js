import React from 'react';
import './App.css'; // Puedes crear este archivo para estilos

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Invitación de Boda</h1>
        <p>Daniel & Paola</p>
        {/* ... añade aquí el resto de la información de tu boda ... */}
        <div className="ubicaciones">
          <h2>Ubicaciones:</h2>
          <p><strong>Ceremonia Religiosa:</strong> Iglesia de "San Pedro", plaza Sucre</p>
          <p><strong>Recepción:</strong> Salón de Eventos "La orquídea", Ciudad Satélite.</p>
        </div>
        {/* ... más información ... */}
        <p>¡Los esperamos!</p>
      </header>
    </div>
  );
}

export default App;