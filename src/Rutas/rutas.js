import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InicioPeliculas from "../componentes/inicio";
// import ResenaForm from "../componentes/ResenaForm";
// import AgregarPelicula from "../componentes/AgregarPelicula"; // Importa el componente AgregarPelicula

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<InicioPeliculas/>} />
        {/* <Route exact path="/resena" element={<ResenaForm />} /> */}
        {/* <Route exact path="/agregar-pelicula" element={<AgregarPelicula />} /> Agrega la ruta para el componente AgregarPelicula */}
      </Routes>
    </Router>
  );
};

export default MyRoutes;
