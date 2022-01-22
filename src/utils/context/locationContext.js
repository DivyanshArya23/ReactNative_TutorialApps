import createDataContext from './createDataContext';

const ACTIONS = {
  ADD_CURR_LOCATION: 'add_current_location',
  START_RECORDING: 'start_recording',
  STOP_RECORDING: 'stop_recording',
  ADD_LOCATION: 'add_location',
  CHANGE_NAME: 'change_name',
};
const iniitalState = {
  recording: false,
  locations: [],
  currentLocation: null,
  name: '',
};

const locationReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_CURR_LOCATION:
      return { ...state, currentLocation: action.payload };
    case ACTIONS.START_RECORDING:
      return { ...state, recording: true };
    case ACTIONS.STOP_RECORDING:
      return { ...state, recording: false };
    case ACTIONS.ADD_LOCATION:
      return { ...state, locations: [...state.locations, action.payload] };
    case ACTIONS.CHANGE_NAME:
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

const changeName = (dispatch) => (name) => {
  dispatch({ type: ACTIONS.CHANGE_NAME, payload: name });
};
const startRecording = (dispatch) => () => {
  dispatch({ type: ACTIONS.START_RECORDING });
};
const stopRecording = (dispatch) => () => {
  dispatch({ type: ACTIONS.STOP_RECORDING });
};
const addLocation = (dispatch) => (location, isRecording) => {
  dispatch({ type: ACTIONS.ADD_CURR_LOCATION, payload: location });
  if (isRecording) {
    dispatch({ type: ACTIONS.ADD_LOCATION, payload: location });
  }
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  {
    changeName,
    startRecording,
    stopRecording,
    addLocation,
  },
  iniitalState
);
