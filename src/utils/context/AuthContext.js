import AsyncStorage from '@react-native-async-storage/async-storage';
import { trackAxios } from '../axios/track';
import { navigate } from '../methods/navigationRef';
import createDataContext from './createDataContext';

const AUTH_ACTIONS = {
  ADD_ERROR: 'add_error',
  SIGNUP: 'signup',
  SIGNIN: 'signin',
  CLEAR_ERROR: 'clear_error_message',
};

const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.ADD_ERROR:
      return { ...state, errorMessage: action.payload };

    case AUTH_ACTIONS.SIGNUP:
    case AUTH_ACTIONS.SIGNIN:
      return { errorMessage: '', token: action.payload };
    case AUTH_ACTIONS.CLEAR_ERROR:
      return { ...state, errorMessage: '' };
    default:
      return state;
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: AUTH_ACTIONS.CLEAR_ERROR });
};

const signup =
  (dispatch) =>
  async ({ email, password }) => {
    // make api request for signin
    try {
      const response = await trackAxios.post('/signup', { email, password });
      // if success, change to authenticated
      const { token } = response.data;
      await AsyncStorage.setItem('token', token);
      dispatch({ type: AUTH_ACTIONS.SIGNUP, payload: token });
      navigate('trackListFlow');
    } catch (error) {
      // if fail, show error
      dispatch({
        type: AUTH_ACTIONS.ADD_ERROR,
        payload: 'Something went Wrong with Signup',
      });
    }
  };

const signin =
  (dispatch) =>
  async ({ email, password }) => {
    // make api request for signin
    try {
      const response = await trackAxios.post('/signin', { email, password });
      // if success, change to authenticated
      const { token } = response.data;
      await AsyncStorage.setItem('token', token);
      dispatch({ type: AUTH_ACTIONS.SIGNIN, payload: token });
      navigate('trackListFlow');
    } catch (error) {
      // if fail, show error
      dispatch({
        type: AUTH_ACTIONS.ADD_ERROR,
        payload: 'Something went Wrong with Signup',
      });
    }
  };

const signout = (dispatch) => {
  return () => {
    // signout, change state to de-authenticated
  };
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage },
  { token: null, errorMessage: '' }
);
