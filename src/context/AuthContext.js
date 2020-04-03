import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { AsyncStorage } from "react-native";
import { navigate } from "../navigationRef";
const authReducer = (state, action) => {
  switch (action.type) {
    case "signup":
      return { errorMessage: "", token: action.payload };
    case "add_error":
      return { token: null, errorMessage: action.payload };
    default:
      return state;
  }
};

// const signup = dispatch => { return ({ email }) => { } }
// above and below are same
// const signup = dispatch => ({ email }) => { }

const signup = dispatch => async ({ email, password }) => {
  // make an api request to sign up with user and password
  try {
    // if we signup, modify state and say user authenticated
    // make api request
    const response = await trackerApi.post("/signup", { email, password });
    // store token
    await AsyncStorage.setItem("token", response.data.token);
    // modify state
    dispatch({ type: "signup", payload: response.data.token });
    // navigate to mainflow from outside React
    navigate("TrackList");
  } catch (err) {
    // if signup fails show error message
    dispatch({ type: "add_error", payload: "Something went wrong!" });
  }
};
const signin = dispatch => ({ email, password }) => {
  // try to sign in
  // handle success by updating state
  // handle failure by showing error message
};
const signout = dispatch => () => {
  // update state to not authenticated
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { token: null, errorMessage: "" }
);
