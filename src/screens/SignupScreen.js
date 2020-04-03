import React from "react";
import { StyleSheet } from "react-native";
import AuthForm from "../components/AuthForm";

const SignupScreen = () => {
  return <AuthForm screen="Signup" />;
};

SignupScreen.navigationOptions = {
  headerShown: false
};

const styles = StyleSheet.create({});

export default SignupScreen;
