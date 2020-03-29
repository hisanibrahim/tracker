import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "../components/Spacer";
const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign up for Tracker</Text>
      </Spacer>

      <Input label="Email" autoCapitalize="none" autoCorrect={false} />
      <Spacer />
      <Input
        label="Password"
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer>
        <Button
          onPress={() => navigation.navigate("mainFlow")}
          title="Sign up"
          raised
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
