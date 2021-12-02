import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const BusinessList = function ({ title, list }) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>{list.length}</Text>
      <FlatList
        horizontal
        data={list}
        keyExtractor={(ele) => ele.id}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default BusinessList;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
