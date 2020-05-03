import "../_mockLocation";

import React, { useEffect, useState, useContext } from "react";
import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import Map from "../components/Map";
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";
import { Context as LocationContext } from "../context/LocationContext";

const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext);

  const [err, setErr] = useState("");
  const startWatching = async () => {
    try {
      const request = await requestPermissionsAsync();
      if (!request.granted) {
        setErr({ message: "Please enable location services!" });
      } else {
        await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10,
          },
          (location) => {
            addLocation(location);
            // console.log(location);
          }
        );
      }
    } catch (err) {
      console.log(err);
      setErr(err);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text>TrackCreateScreen</Text>
      <Map />
      {err ? <Text>{err.message}</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
