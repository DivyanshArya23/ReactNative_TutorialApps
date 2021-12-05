import axios from 'axios';
import API_URLS from '../../config/apiUrls';
import { YELP_ENV } from '../../config/environment';

const axiosInstance = axios.create({
  baseURL: API_URLS?.yelp?.url,
  headers: {
    Authorization: `Bearer ${YELP_ENV.API_KEY}`,
  },
});
export { axiosInstance as yelpAxios };
export default axiosInstance;
