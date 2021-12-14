import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from 'expo-location';
import Map from '../../components/TrackApp/Map';
import '../../utils/methods/_mockLocation';
import { Context as LocationContext } from '../../utils/context/locationContext';

const TrackCreate = function () {
  const [err, setErr] = useState(null);
  const { addLocation } = useContext(LocationContext);

  useEffect(() => {
    startWatching();
  }, []);

  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      if (!granted) throw new Error('Location Permission not granted');
      watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        (location) => {
          addLocation(location);
        }
      );
      setErr(null);
    } catch (error) {
      setErr(error);
    }
  };

  return (
    <SafeAreaView>
      <Text h2>TrackCreate</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
};

export default TrackCreate;

const styles = StyleSheet.create({});
