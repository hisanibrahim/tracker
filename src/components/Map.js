import React, { useContext } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
  const {
    state: { currentLocation },
  } = useContext(LocationContext);
  let points = [];

  for (let i = 0; i < 20; i++) {
    points.push({
      latitude: 10.016654 + i * 0.01,
      longitude: 76.341303 - i * 0.01,
    });
  }

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        region={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Circle
          center={currentLocation.coords}
          radius={30}
          strokeColor="rgba(158, 158, 255, 1)"
          fillColor="rgba(158, 158, 255, 0.3)"
        />
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
