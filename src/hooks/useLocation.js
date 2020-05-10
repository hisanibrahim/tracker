import { useEffect, useState } from "react";
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";

export default (shouldWatch, callback) => {
  const [err, setErr] = useState("");

  /*

  using prop values in useEffect causes stale references. To avoid this

  1. if you are referencing state, props, context values in useEffect
     add them to dependency list (second arg of useEffect)

  2. avoid defining helper called from useEffect outside useEffect
 
  */

  useEffect(() => {
    let subscriber;

    const startWatching = async () => {
      try {
        const request = await requestPermissionsAsync();
        if (!request.granted) {
          setErr({ message: "Please enable location services!" });
        } else {
          subscriber = await watchPositionAsync(
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
    if (shouldWatch) {
      startWatching();
    } else {
      if (subscriber) {
        subscriber.remove();
      }
      subscriber = null;
    }

    /* 
    this returning function call executes before next useEffect
    */
    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };
  }, [shouldWatch, callback]);

  return [err];
};
