import axios from "axios";

const KEY = 'AIzaSyCYaTcSA7Lb2Nd7m-gqmMjMSjCZCqWqK2g';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});