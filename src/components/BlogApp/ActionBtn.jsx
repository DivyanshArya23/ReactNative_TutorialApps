import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const ActionBtn = function ({ title }) {
  return (
    <View style={styles.parent}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.icon}>
        <AntDesign name="delete" size={24} color="black" />
      </View>
    </View>
  );
};

export default ActionBtn;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
  parent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 2,
    padding: 8,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
  },
  icon: {
    borderColor: 'black',
    borderWidth: 1,
  },
});
