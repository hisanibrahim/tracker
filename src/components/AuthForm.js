import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { withNavigation } from "react-navigation";

const AuthForm = ({ navigation, screen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state, signup, signin } = useContext(AuthContext);
  const header = screen === "Signup" ? "Sign up" : "Sign in";
  const linkTo = screen === "Signup" ? "Signin" : "Signup";
  const linkTitle =
    screen === "Signup"
      ? "Already have an account? Please click to sign in"
      : "Don't have an account? Sign up instead";
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>{header} for Tracker</Text>
      </Spacer>
      <Spacer />

      <Input
        label="Email"
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={setEmail}
      />
      <Spacer />

      <Input
        label="Password"
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={setPassword}
        errorStyle={{ color: "red" }}
        errorMessage={state.errorMessage}
      />
      <Spacer>
        <Button
          onPress={() =>
            screen === "Signup"
              ? signup({ email, password })
              : signin({ email, password })
          }
          title={header}
          raised
          disabled={email && password ? false : true}
        />
      </Spacer>
      <Spacer />
      <Button
        onPress={() => navigation.navigate(linkTo)}
        title={linkTitle}
        type="clear"
        raised
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
  },
});

export default withNavigation(AuthForm);
