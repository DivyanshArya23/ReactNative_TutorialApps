import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Accounts = function () {
  return (
    <View>
      <Text style={styles.title}>Accounts</Text>
    </View>
  );
};

export default Accounts;

const styles = StyleSheet.create({
  title: {
    fontSize: 48,
  },
});
