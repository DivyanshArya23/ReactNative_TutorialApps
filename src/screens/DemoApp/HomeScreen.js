import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button,
  FlatList,
  //   TouchableOpacity,
} from 'react-native';
import Routes from '../../helpers/DemoApp/routeConfig';

const HomeScreen = function ({ navigation }) {
  const buttons = Object.entries(Routes).map((ele) => ({
    title: `Go To ${ele[0]}`,
    route: ele[0],
  }));
  return (
    <View>
      <Text style={styles.text}>Demo-App</Text>
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

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
});
