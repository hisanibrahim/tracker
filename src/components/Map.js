import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Polyline } from "react-native-maps";

const Map = () => {
  let points = [];

  for (let i = 0; i < 20; i++) {
    points.push({
      latitude: 10.016654 + i * 0.01,
      longitude: 76.341303 - i * 0.01,
    });
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 10.016654,
          longitude: 76.341303,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Polyline coordinates={points} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginVertical: 15,
    // marginHorizontal: 10,
  },
  map: {
    height: 300,
  },
});

export default Map;
