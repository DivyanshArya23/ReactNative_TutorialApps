import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Context as TrackContext } from '../../utils/context/TrackContext';

const TrackDetail = function ({ navigation }) {
  const _id = navigation.getParam('_id');
  const { state } = useContext(TrackContext);
  const track = state.find((item) => item._id === _id);

  return (
    <View>
      <Text style={styles.title}>{track.name}</Text>
    </View>
  );
};

export default TrackDetail;

const styles = StyleSheet.create({
  title: {
    fontSize: 48,
  },
});
