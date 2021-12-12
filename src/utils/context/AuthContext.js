import AsyncStorage from '@react-native-async-storage/async-storage';
import { trackAxios } from '../axios/track';
import { navigate } from '../methods/navigationRef';
import createDataContext from './createDataContext';

const AUTH_ACTIONS = {
  ADD_ERROR: 'add_error',
  SIGNUP: 'signup',
};

const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.ADD_ERROR:
      return { ...state, errorMessage: action.payload };

    case AUTH_ACTIONS.SIGNUP:
      return { errorMessage: '', token: action.payload };
    default:
      return state;
  }
};

const signup =
  (dispatch) =>
  async ({ email, password }) => {
    // make api request for signin
    try {
      const response = await trackAxios.post('/signup', { email, password });
      const { token } = response.data;
      await AsyncStorage.setItem('token', token);
      dispatch({ type: AUTH_ACTIONS.SIGNUP, payload: token });
      navigate('trackListFlow');
    } catch (error) {
      dispatch({
        type: AUTH_ACTIONS.ADD_ERROR,
        payload: 'Something went Wrong with Signup',
      });
    }
    // if success, change to authenticated
    // if fail, show error
  };

const signin = (dispatch) => {
  return ({ email, password }) => {
    // make api request for signin
    // if success, change to authenticated
    // if fail, show error
  };
};
const signout = (dispatch) => {
  return () => {
    // signout, change state to de-authenticated
  };
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { token: null, errorMessage: '' }
);
