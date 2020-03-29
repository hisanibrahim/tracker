import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const SignupScreen = ({ navigation }) => {
  return (
    <View>
      <Text>SignupScreen</Text>
      <Button
        onPress={() => navigation.navigate("Signin")}
        title="Navigate to Sign in"
      />
      <Button
        onPress={() => navigation.navigate("mainFlow")}
        title="Navigate to mainFlow"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;
