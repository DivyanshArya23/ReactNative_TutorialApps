import createDataContext from './createDataContext';

const ACTIONS = {
  ADD_CURR_LOCATION: 'add_current_location',
};
const iniitalState = {
  recording: false,
  locations: [],
  currentLocation: null,
};

const locationReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_CURR_LOCATION:
      return { ...state, currentLocation: action.payload };
    default:
      return state;
  }
};

const startRecording = (dispatch) => () => {};
const stopRecording = (dispatch) => () => {};
const addLocation = (dispatch) => (location) => {
  dispatch({ type: ACTIONS.ADD_CURR_LOCATION, payload: location });
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  {
    startRecording,
    stopRecording,
    addLocation,
  },
  iniitalState
);
