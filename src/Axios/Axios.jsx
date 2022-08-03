import axios from 'axios'
const url = "https://api.shrabon.me/api/";

const Axios = axios.create({
    baseURL: url
})

export default Axios;