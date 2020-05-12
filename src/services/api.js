import axios from 'axios';

const api = axios.create({
    baseURL: 'https://potfolio.redirectme.net/feratwitter'
})

export default api;