import axios from 'axios';
import API_URLS from '../../config/apiUrls';

const axiosInstance = axios.create({
  baseURL: API_URLS?.trackApp?.url,
  headers: {
    // Authorization: `Bearer ${YELP_ENV.API_KEY}`,
  },
});
export { axiosInstance as trackAxios };
export default axiosInstance;
