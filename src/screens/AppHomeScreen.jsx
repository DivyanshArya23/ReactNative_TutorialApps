import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button,
  FlatList,
  //   TouchableOpacity,
} from 'react-native';
import { AppHomeScreensNavs } from '../helpers/AppHomeScreen';

const HomeScreen = function ({ navigation }) {
  const buttons = AppHomeScreensNavs.map((ele) => ({
    title: `Go To ${ele}`,
    route: ele,
  }));

  return (
    <View>
      <Text style={styles.text}>AppHomeScreen</Text>
      <FlatList
        keyExtractor={(ele) => ele.title}
        data={buttons}
        renderItem={({ item }) => {
          return (
            <Button
              onPress={() => {
                navigation.navigate(item.route);
              }}
              color="#00aaaa"
              title={item.title}
            />
          );
        }}
      />

      {/* <FlatList
        data={buttons}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(item.route);
              }}
            >
              <Text>{item.title}</Text>
            </TouchableOpacity>
          );
        }}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default HomeScreen;
