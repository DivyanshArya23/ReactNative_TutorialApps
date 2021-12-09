import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const TrackList = function ({ navigation }) {
  return (
    <View>
      <Text style={styles.title}>TrackList</Text>
      <Button
        title="Go to track Detail"
        onPress={() => {
          navigation.navigate('TrackAppTrackDetail');
        }}
      />
    </View>
  );
};

export default TrackList;

const styles = StyleSheet.create({
  title: {
    fontSize: 48,
  },
});
