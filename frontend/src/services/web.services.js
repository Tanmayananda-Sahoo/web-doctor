import axios from '../utils/axios.js';

async function submitData(data) {
    const response = await axios.post('/submit', data);
    console.log(response.data);
}

export {
    submitData,
}