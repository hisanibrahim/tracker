import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state, signup } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign up for Tracker</Text>
      </Spacer>

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
          onPress={() => signup({ email, password })}
          title="Sign up"
          raised
          disabled={email && password ? false : true}
        />
      </Spacer>
      <Button
        onPress={() => navigation.navigate("Signin")}
        title="Already have an account? Please click to sign in"
        type="clear"
        raised
      />
    </View>
  );
};

SignupScreen.navigationOptions = {
  headerShown: false
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1
  }
});

export default SignupScreen;
