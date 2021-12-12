import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import Map from '../../components/TrackApp/Map';

const TrackCreate = function () {
  return (
    <SafeAreaView>
      <Text h2>TrackCreate</Text>
      <Map />
    </SafeAreaView>
  );
};

export default TrackCreate;

const styles = StyleSheet.create({});
