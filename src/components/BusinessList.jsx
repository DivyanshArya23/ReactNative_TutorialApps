import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import BusinessDetail from './BusinessDetail';

const BusinessList = function ({ title, list, navigation }) {
  return list.length ? (
    <View style={styles.parent}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={list}
        keyExtractor={(ele) => ele.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SearchResult');
            }}
          >
            <BusinessDetail item={item} />
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  ) : null;
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
