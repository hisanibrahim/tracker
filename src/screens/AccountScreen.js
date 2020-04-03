import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <View>
      <Text>AccountScreen</Text>
      <Button onPress={() => signout()} title="Sign out" type="clear" raised />
    </View>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
