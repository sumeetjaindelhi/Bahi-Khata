import axios from "axios";

const instance = axios.create({
    
    baseURL: 'https://bahi-khata-zw5s.onrender.com',
    withCredentials: true
});

export default instance;