import React from 'react';
import { StyleSheet, Text, FlatList } from 'react-native';

const ListScreen = function () {
  const friends = [
    { name: 'Friend #1', age: 20 },
    { name: 'Friend #2', age: 20 },
    { name: 'Friend #3', age: 20 },
    { name: 'Friend #4', age: 20 },
    { name: 'Friend #5', age: 20 },
    { name: 'Friend #6', age: 20 },
    { name: 'Friend #7', age: 20 },
    { name: 'Friend #8', age: 20 },
  ];
  return (
    <FlatList
      keyExtractor={(element) => element.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.listItem}>
            {item.name} - Age:{item.age}
          </Text>
        );
      }}
    />
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 50,
  },
});
