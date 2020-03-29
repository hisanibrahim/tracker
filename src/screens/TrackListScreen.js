import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const TrackListScreen = ({ navigation }) => {
  return (
    <View>
      <Text>TrackListScreen</Text>
      <Button
        onPress={() => navigation.navigate("TrackDetail")}
        title="Navigate to track detail"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
