import "../_mockLocation";

import React, { useContext, useCallback } from "react";
import { Text, StyleSheet } from "react-native";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import Map from "../components/Map";
import TrackForm from "../components/TrackForm";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";

const TrackCreateScreen = ({ isFocused }) => {
  const {
    state: { recording },
    addLocation,
  } = useContext(LocationContext);

  // useCallback works as useEffect to avoid
  // returning new callback for every render
  // send new callback only when recording changes

  const callback = useCallback(
    (location) => {
      addLocation(location, recording);
    },
    [recording]
  );

  const [err] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text>TrackCreateScreen</Text>
      <Map />
      {err ? <Text>{err.message}</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
