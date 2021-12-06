import axios from 'axios';

export default axios.create({
    baseURL: process.env.BASE_URL_API || 'https://localhost:3001/api/v1',
    headers: {
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer ' + process.env.AUTH_TOKEN,
    },
});