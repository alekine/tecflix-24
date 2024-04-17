import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InicioPeliculas from "../componentes/InicioPeliculas";
import AddPelicula from "../componentes/addMovie";





const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<InicioPeliculas/>} />
        <Route exact path="/agregar-pelicula" element={<AddPelicula/>} />
       
      </Routes>
    </Router>
  );
};

export default MyRoutes;
