import * as Location from 'expo-location';

const distanceDiff = 0.0001;

const getLocation = (increment) => {
  return {
    timestamp: 100000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude: 77.74646883189935 + increment * distanceDiff,
      latitude: 28.95779925200964 + increment * distanceDiff,
    },
  };
};

let counter = 0;

setInterval(() => {
  Location.EventEmitter.emit('Expo.locationChanged', {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter),
  });
  counter += 1;
}, 1000);
