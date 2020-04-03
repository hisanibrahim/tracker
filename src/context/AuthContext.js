import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { AsyncStorage } from "react-native";

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
    const response = await trackerApi.post("/signup", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signup", payload: response.data.token });
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
