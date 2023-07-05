import axios from "axios";

import { KEY_API } from "./api-params";

const CREDITS_PATH = `credits`;
const language = 'en-US';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';


const getCredits = async (movieID) => {
    
    try {
        const res = await axios.get(`movie/${movieID}/${CREDITS_PATH}?api_key=${KEY_API}&language=${language}`);
        const movieCredits = res.data
        return movieCredits;
    } catch (error) {
        console.log('Something wrong with API', error.message);
    };
};

export { getCredits}