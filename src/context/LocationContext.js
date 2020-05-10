import createDataContext from "./createDataContext";

const locationReducer = (state, action) => {
  switch (action.type) {
    case "add_current_location":
      return { ...state, currentLocation: action.payload };
    case "add_location":
      return { ...state, locations: [...state.locations, action.payload] };
    case "start_recording_location":
      return { ...state, recording: true };
    case "stop_recording_location":
      return { ...state, recording: false };
    case "change_name":
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

const startRecording = (dispatch) => () => {
  dispatch({ type: "start_recording_location" });
};
const stopRecording = (dispatch) => () => {
  dispatch({ type: "stop_recording_location" });
};
const addLocation = (dispatch) => (location, recording) => {
  dispatch({ type: "add_current_location", payload: location });
  if (recording) {
    dispatch({ type: "add_location", payload: location });
  }
};
const changeName = (dispatch) => (name) => {
  dispatch({ type: "change_name", payload: name });
};

export const { Provider, Context } = createDataContext(
  locationReducer,
  {
    startRecording,
    stopRecording,
    addLocation,
    changeName,
  },
  {
    recording: false,
    locations: [],
    currentLocation: null,
  }
);
