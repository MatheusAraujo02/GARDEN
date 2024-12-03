import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://10.67.23.31:3333'
    baseURL: 'http://10.67.23.52:3333'
});

export default api;

// baseURL: 'http://10.67.23.52:3333' Lab 6
// baseURL: 'http://10.67.23.31:3333' lab 5
