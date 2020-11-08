import axios from 'axios';
import { API } from '../urlConfig';

const axiosInstant = axios.create({
    baseURL: API,
    // headers: {
    //     'Authorization': '',
    // }
});

export default axiosInstant;