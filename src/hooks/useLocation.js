import { useEffect, useState } from "react";
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";

export default (shouldWatch, callback) => {
  const [err, setErr] = useState("");
  const [subscriber, setSubscriber] = useState(null);
  const startWatching = async () => {
    try {
      const request = await requestPermissionsAsync();
      if (!request.granted) {
        setErr({ message: "Please enable location services!" });
      } else {
        const sub = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10,
          },
          callback
        );
        setSubscriber(sub);
      }
    } catch (err) {
      console.log(err);
      setErr(err);
    }
  };

  useEffect(() => {
    if (shouldWatch) {
      startWatching();
    } else {
      subscriber.remove();
      setSubscriber(null);
    }
  }, [shouldWatch]);

  return [err];
};
