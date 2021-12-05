import axios from 'axios';
// import API_URLS from '../../config/apiUrls';
// import { YELP_ENV } from '../../config/environment';

const axiosInstance = axios.create({
  baseURL: 'http://397f-122-161-65-147.ngrok.io', // change baseUrl according to ngrok server url
});

export { axiosInstance as blogAxios };
export default axiosInstance;
