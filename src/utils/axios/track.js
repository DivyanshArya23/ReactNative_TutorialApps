import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import API_URLS from '../../config/apiUrls';

const axiosInstance = axios.create({
  baseURL: API_URLS?.trackApp?.url,
  headers: {
    // Authorization: `Bearer ${YELP_ENV.API_KEY}`,
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (err) => Promise.reject(err)
);
export { axiosInstance as trackAxios };
export default axiosInstance;
