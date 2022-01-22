import { trackAxios } from '../axios/track';
import createDataContext from './createDataContext';

const ACTIONS = {};

const iniitalState = [];

const trackReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const fetchTracks = (dispatch) => () => {};
const createTrack = (dispatch) => async (name, locations) => {
  await trackAxios.post('/tracks', { name, locations });
};

export const { Context, Provider } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  iniitalState
);
