import * as Location from "expo-location";

const tenMetersWithDegrees = 0.0001;

const getLocation = (increment) => {
  return {
    coords: {
      accuracy: 5,
      altitude: 5,
      heading: 0,
      latitude: 10.0182231 + increment * tenMetersWithDegrees,
      longitude: 76.3415834 + increment * tenMetersWithDegrees,
      speed: 0,
    },
    mocked: false,
    timestamp: 1588485002000,
  };
};

let counter = 0;

setInterval(() => {
  Location.EventEmitter.emit("Expo.locationChanged", {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter),
  });
  counter++;
}, 1000);
