import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// const signup = dispatch => { return ({ email }) => { } }
// above and below are same
// const signup = dispatch => ({ email }) => { }

const signup = dispatch => ({ email, password }) => {
  // make an api request to sign up with user and password
  // if we signup, modify state and say user authenticated
  // if signup fails show error message
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
  {},
  { isSignedIn: false }
);
