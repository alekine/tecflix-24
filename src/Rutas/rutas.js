import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InicioPeliculas from "../componentes/Web/InicioPeliculas";
import AddPelicula from "../componentes/Web/addMovie";
import Login from "../componentes/User/Login";
import VISTAADMIN from "../componentes/Web/vistaadmin";
import CrearCuenta from "../componentes/User/CrearCueta";







const MyRoutes = () => {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Login/>} />
        <Route exact path="/vista-principal" element={<InicioPeliculas/>} />
        <Route exact path="/agregar-pelicula" element={<AddPelicula/>} />
        <Route exact path="/vista-admin" element={<VISTAADMIN/>} />
        <Route exact path="/crear-cuenta" element={<CrearCuenta/>} />


       
      </Routes>
    </Router>
  );
};

export default MyRoutes;
