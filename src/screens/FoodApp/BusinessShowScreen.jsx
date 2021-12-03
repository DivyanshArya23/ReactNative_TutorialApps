import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { getBusinessById } from '../../helpers';

const BusinessShowScreen = function ({ navigation }) {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');

  useEffect(async () => {
    const data = await getBusinessById(id);
    setResult(data);
  }, []);

  if (!result) return null;
  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

export default BusinessShowScreen;

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 200,
  },
});
