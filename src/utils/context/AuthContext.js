import { trackAxios } from '../axios/track';
import createDataContext from './createDataContext';

const AUTH_ACTIONS = {
  ADD_ERROR: 'add_error',
};

const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.ADD_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    // make api request for signin
    try {
      const response = await trackAxios.post('/signup', { email, password });
      const { token } = response.data;
    } catch (error) {
      dispatch({
        type: AUTH_ACTIONS.ADD_ERROR,
        payload: 'Something went Wrong with Signup',
      });
    }
    // if success, change to authenticated
    // if fail, show error
  };
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
  { isSignedIn: false, errorMessage: '' }
);
