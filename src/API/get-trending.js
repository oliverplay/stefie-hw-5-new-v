import axios from "axios";
import { KEY_API } from "./api-params";

const TRENDING_PATH = 'trending/movie/day'
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';


const getTrending = async() => {
    try {
        const {data} = await axios.get(`${TRENDING_PATH}?api_key=${KEY_API}`);
        const trendingData = data.results
        return trendingData;
    } catch (error) {
        console.log('Something went wrong with API request', error.message);
    };
};

export { getTrending}