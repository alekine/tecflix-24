import Axios from "axios";

export default Axios.create({
    baseURL:"http://localhost:10000/api"////api es un prefijo para las rutas
    // baseURL:"https://api-app-8ljh.onrender.com/api"////api es un prefijo para las rutas

})



