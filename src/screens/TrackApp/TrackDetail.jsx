import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import { Context as TrackContext } from '../../utils/context/TrackContext';

const TrackDetail = function ({ navigation }) {
  const _id = navigation.getParam('_id');
  const { state } = useContext(TrackContext);
  const track = state.find((item) => item._id === _id);

  return (
    <View>
      <Text style={styles.title}>{track.name}</Text>
      <MapView
        initialRegion={{
          ...track.locations[0].coords,
          //   latitude: 28.95779925200964,
          //   longitude: 77.74646883189935,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        style={styles.map}
      >
        <Polyline
          lineDashPattern={[1]}
          coordinates={track?.locations?.map((loc) => loc.coords)}
        />
      </MapView>
    </View>
  );
};

export default TrackDetail;

const styles = StyleSheet.create({
  title: {
    fontSize: 48,
  },
  map: {
    height: 250,
  },
});
