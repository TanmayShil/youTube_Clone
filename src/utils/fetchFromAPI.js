import axios from "axios";
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
    params: {
        maxResults: 50,
    },
    headers: {
        'X-RapidAPI-Key': 'df0ced5c07msh9f1d10360acf63ep1ad192jsn0ce12fd502ab',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }

};
export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;

};