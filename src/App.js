
// import React from 'react';
// import App from './componentes/InicioPeliculas'; // Asegúrate de tener la ruta correcta al componente App
// import './Estilos/InicioPeliculas.css'; // Importa el archivo de estilos si es necesario

// function MainApp() {
//   return (
//     <div className="main-app">
      
//       <App />
//     </div>
//   );
// }

// export default MainApp;

///////////////////////////////////////////////////////


// // En App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InicioPeliculas from './componentes/InicioPeliculas'; // Importa el componente InicioPeliculas
import ResenaForm from './componentes/ResenaForm'; // Importa el componente ResenaForm
import './Estilos/InicioPeliculas.css'; // Importa el archivo de estilos si es necesario


function App() {
  return (
    <Router>
      <div className="main-app">
        <Routes>
          <Route exact path="/resena" element={<ResenaForm />} />
          <Route exact path="/" element={<InicioPeliculas />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
