import Axios from 'axios';
const axios=Axios.create({
    baseURL:"http://localhost:8000/api",
    withCredentials:true,
    withXSRFToken:true,
    headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
    }

});

export default axios;