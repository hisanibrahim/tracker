import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import AuthForm from "../components/AuthForm";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";

const SigninScreen = () => {
  const { clearErrorMessage } = useContext(AuthContext);

  return (
    <>
      <NavigationEvents onWillFocus={() => clearErrorMessage()} />
      <AuthForm screen="Signin" />
    </>
  );
};

SigninScreen.navigationOptions = {
  headerShown: false
};

const styles = StyleSheet.create({});

export default SigninScreen;
