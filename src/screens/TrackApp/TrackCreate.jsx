import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { requestForegroundPermissionsAsync } from 'expo-location';
import Map from '../../components/TrackApp/Map';

const TrackCreate = function () {
  const [err, setErr] = useState(null);

  useEffect(() => {
    startWatching();
  }, []);

  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      if (!granted) throw new Error('Location Permission not granted');
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
