import axios from 'axios'

const instance = axios.create({
    baseURL: "https://api.edamam.com/search"
});

export default instance;