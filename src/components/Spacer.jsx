import React from 'react';
import { StyleSheet, View } from 'react-native';

const Spacer = function ({ children }) {
  return <View style={styles.parent}>{children}</View>;
};

export default Spacer;

const styles = StyleSheet.create({
  parent: {
    margin: 15,
  },
});
