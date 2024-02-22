// En App.js
import React from 'react';
import App from './componentes/InicioPeliculas'; // Asegúrate de tener la ruta correcta al componente App
import './Contenido/InicioPeliculas.css'; // Importa el archivo de estilos si es necesario

function MainApp() {
  return (
    <div className="main-app">
      
      <App />
    </div>
  );
}

export default MainApp;
