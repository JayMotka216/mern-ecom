import axios from 'axios';
import { API } from '../urlConfig';

const token = localStorage.getItem('token');

const axiosInstant = axios.create({
    baseURL: API,
    headers: {
        'Authorization': token ? `Bearer ${token}` : null,
    }
});

export default axiosInstant;