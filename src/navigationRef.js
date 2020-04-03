// To make possible navigation outside react

import { NavigationActions } from "react-navigation";

let navigator;

export const setNavigator = nav => {
  // nav === navigator coming from react navigation in App.js
  // assigned to navigator
  navigator = nav;
};

export const navigate = (routeName, params) => {
  // navigator provided by react navigation has internal api
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
};
