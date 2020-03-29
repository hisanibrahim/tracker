import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
const SigninScreen = () => {
  const { state } = useContext(AuthContext);
  console.log(state.isSignedIn);
  return (
    <View>
      <Text>SigninScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SigninScreen;
