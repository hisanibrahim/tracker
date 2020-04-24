import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";
import { SafeAreaView } from "react-navigation";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text>AccountScreen</Text>
      <Button onPress={() => signout()} title="Sign out" type="clear" raised />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
