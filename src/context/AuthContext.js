import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { AsyncStorage } from "react-native";
import { navigate } from "../navigationRef";
const authReducer = (state, action) => {
  switch (action.type) {
    // only one required, both signup and signin can use
    case "signin":
      return { errorMessage: "", token: action.payload };
    case "add_error":
      return { token: null, errorMessage: action.payload };
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    case "signout":
      return { token: null, errorMessage: "" };
    default:
      return state;
  }
};

const localSignin = dispatch => async () => {
  // check for async storage
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "signin", payload: token });
    navigate("TrackList");
  } else {
    navigate("Signup");
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
    // dispatching same signin
    dispatch({ type: "signin", payload: response.data.token });
    // navigate to mainflow from outside React
    navigate("TrackList");
  } catch (err) {
    // if signup fails show error message
    dispatch({ type: "add_error", payload: "Something went wrong!" });
  }
};
const signin = dispatch => async ({ email, password }) => {
  // try to sign in
  try {
    // handle success by updating state
    // make api request
    const response = await trackerApi.post("/signin", { email, password });
    // modify state
    dispatch({ type: "signin", payload: response.data.token });
    // store token
    await AsyncStorage.setItem("token", response.data.token);
    // navigate to mainflow from outside React
    navigate("TrackList");
  } catch (err) {
    console.log(err.message);
    dispatch({ type: "add_error", payload: "Something went wrong!" });
  }
  // handle failure by showing error message
};
const signout = dispatch => async () => {
  await AsyncStorage.removeItem("token");
  dispatch({ type: "signout" });
  navigate("Signin");
};

const clearErrorMessage = dispatch => () => {
  dispatch({ type: "clear_error_message" });
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage, localSignin },
  { token: null, errorMessage: "" }
);
