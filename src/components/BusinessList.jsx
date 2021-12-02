import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import BusinessDetail from './BusinessDetail';

const BusinessList = function ({ title, list }) {
  return (
    <View style={styles.parent}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={list}
        keyExtractor={(ele) => ele.id}
        renderItem={({ item }) => <BusinessDetail item={item} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default BusinessList;

const styles = StyleSheet.create({
  parent: {
    marginBottom: 10,
  },
  title: {
    marginBottom: 5,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
  },
});
