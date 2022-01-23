import React, { useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { ListItem } from 'react-native-elements';

import { NavigationEvents } from 'react-navigation';
import { Context as TrackContext } from '../../utils/context/TrackContext';

const TrackList = function ({ navigation }) {
  const { state, fetchTracks } = useContext(TrackContext);

  return (
    <View>
      <NavigationEvents onWillFocus={fetchTracks} />
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('TrackAppTrackDetail', { _id: item._id });
              }}
            >
              <ListItem>
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

TrackList.navigationOptions = () => {
  return {
    title: 'Tracks',
  };
};

export default TrackList;

const styles = StyleSheet.create({
  title: {
    fontSize: 48,
  },
});
