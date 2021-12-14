import React, { useContext } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import { Context as LocationContext } from '../../utils/context/locationContext';

const Map = function () {
  const {
    state: { currentLocation },
  } = useContext(LocationContext);

  if (!currentLocation)
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  return (
    <View>
      <Text>Map</Text>
      <MapView
        initialRegion={{
          ...currentLocation.coords,
          //   latitude: 28.95779925200964,
          //   longitude: 77.74646883189935,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        region={{
          ...currentLocation.coords,
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
