import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import AuthForm from "../components/AuthForm";

const SigninScreen = () => {
  return <AuthForm screen="Signin" />;
};

SigninScreen.navigationOptions = {
  headerShown: false
};
const styles = StyleSheet.create({});

export default SigninScreen;
