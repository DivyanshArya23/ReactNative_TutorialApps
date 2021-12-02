import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const BusinessDetail = function ({
  item: { name, image_url: imageUrl, rating, review_count: reviewCount },
}) {
  return (
    <View style={styles.parent}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.details}>
        {rating} Rating, {reviewCount} Reviews
      </Text>
    </View>
  );
};

export default BusinessDetail;

const styles = StyleSheet.create({
  image: {
    width: 250,
    borderRadius: 4,
    height: 150,
  },
  parent: {
    // padding: 20,
    marginLeft: 15,
  },
  name: {
    // fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 5,
  },
  details: {
    opacity: 0.8,
    color: 'grey',
  },
});
