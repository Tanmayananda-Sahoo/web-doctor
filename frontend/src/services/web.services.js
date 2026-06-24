import axios from '../utils/axios.js';
import {create} from 'zustand';

const webStore = create((set, get) => ({
    analytics: null,
    isLoading: false,
    inputData: null,
    submit: async(data) => {
        set({inputData: data});
        console.log("Requesting...");
        const response = await axios.post('/submit', data);
        // set({analytics: response.data});
        return response;
    },
    setData: async(data) => {
        set({inputData: data});
        console.log("Setting the data...");
        console.log("Data: ", get().inputData);
    }
}))

export {
    webStore,
}