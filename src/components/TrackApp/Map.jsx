import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

const Map = function () {
  return (
    <View>
      <Text>Map</Text>
      <MapView
        initialRegion={{
          latitude: 28.95779925200964,
          longitude: 77.74646883189935,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        style={styles.map}
      >
        {/* <Polyline /> */}
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    height: 300,
    //  width: 200
  },
});
