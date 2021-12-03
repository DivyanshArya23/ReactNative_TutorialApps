import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentScreen = function () {
  //   const greeting = 'Bye There!';
  const name = 'Divyansh';
  const greeting2 = <Text style={styles.text2}>My name is {name}</Text>;
  return (
    <View>
      <Text style={styles.text}>Getting Started with React Native</Text>
      {greeting2}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 45,
  },
  text2: {
    fontSize: 20,
  },
});

export default ComponentScreen;
