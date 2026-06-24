import axios from '../utils/axios.js';
import {create} from 'zustand';

const webStore = create((set, get) => ({
    analytics: null,
    isLoading: false,
    inputData: null,
    submit: async(data) => {
        set({isLoading: true});
        set({inputData: data});
        const response = await axios.post('/submit', data);
        set({isLoading: false});
        set({analytics: response.data});
        console.log(get().analytics.result);
    }
}))

export {
    webStore,
}