import Axios from "axios";

export default Axios.create({
    baseURL:"http://localhost:4000/api"////api es un prefijo para las rutas
})



