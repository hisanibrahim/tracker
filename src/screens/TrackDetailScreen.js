import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { Context as TrackContext } from "../context/TrackContext";
import Spacer from "../components/Spacer";
import MapView, { Polyline } from "react-native-maps";

const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam("_id");
  const track = state.find((t) => t._id === _id);
  const initialRegion = track.locations[0].coords;
  return (
    <>
      <Spacer>
        <Text h4>{track.name}</Text>
      </Spacer>
      <Spacer />
      <MapView
        initialRegion={{
          longitudeDelta: 0.02,
          latitudeDelta: 0.02,
          ...initialRegion,
        }}
        style={styles.map}
      >
        <Polyline coordinates={track.locations.map((loc) => loc.coords)} />
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default TrackDetailScreen;
