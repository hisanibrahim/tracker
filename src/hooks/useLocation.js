import { useEffect, useState } from "react";
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";

export default (callback) => {
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
          callback
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

  return [err];
};
