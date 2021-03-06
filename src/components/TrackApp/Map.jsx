import React, { useContext } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../../utils/context/locationContext';

const Map = function () {
  const {
    state: { currentLocation, locations },
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
        // region={{
        //   ...currentLocation.coords,
        //   latitudeDelta: 0.01,
        //   longitudeDelta: 0.01,
        // }}
        style={styles.map}
      >
        <Polyline
          lineDashPattern={[1]}
          coordinates={locations.map((loc) => loc.coords)}
        />
        <Circle
          center={currentLocation.coords}
          radius={30}
          strokeColor="#8888ff"
          fillColor="#8888ff77"
        />
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    height: 250,
    //  width: 200
  },
});
