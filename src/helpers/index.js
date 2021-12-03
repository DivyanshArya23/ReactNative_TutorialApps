import axios from '../utils/axios/yelp';

export const filterByPrice = (list, price) => {
  return list.filter((ele) => ele.price === price);
};

export const getBusinessById = async (id) => {
  try {
    const res = await axios.get(`/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
export const a = '';
