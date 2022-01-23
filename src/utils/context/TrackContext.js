import { trackAxios } from '../axios/track';
import createDataContext from './createDataContext';

const ACTIONS = { FETCH_TRACKS: 'fetch_track' };

const iniitalState = [];

const trackReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_TRACKS:
      return action.payload;
    default:
      return state;
  }
};

const fetchTracks = (dispatch) => async () => {
  const {
    data: { data },
  } = await trackAxios.get('/tracks');
  dispatch({ type: ACTIONS.FETCH_TRACKS, payload: data });
};
const createTrack = (dispatch) => async (name, locations) => {
  await trackAxios.post('/tracks', { name, locations });
};

export const { Context, Provider } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  iniitalState
);
