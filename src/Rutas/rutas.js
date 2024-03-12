import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InicioPeliculas from "../componentes/InicioPeliculas";
import  ResenaForm from "../componentes/ResenaForm";


const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<InicioPeliculas/>} />
        <Route exact path="/resena" element={<ResenaForm />} />
      </Routes>
    </Router>
  );
};

export default MyRoutes;
