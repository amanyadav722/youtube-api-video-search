import axios from 'axios';
const KEY = 'wmBHHaVR6z7nhuhaIxRxd6bsC2o'; // mention your youtube API key here

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 25,
        key: KEY
    }
})