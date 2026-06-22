import axios from '../utils/axios.js';
import {create} from 'zustand';

const webStore = create((set, get) => ({
    analytics: null,
    isLoading: false,
    submit: async(data) => {
        set({isLoading: true});
        console.log(get().isLoading);
        const response = await axios.post('/submit', data);
        set({isLoading: false});
        console.log(get().isLoading);
        set({analytics: response.data});
        console.log(get().analytics.result);
    }
}))

export {
    webStore,
}