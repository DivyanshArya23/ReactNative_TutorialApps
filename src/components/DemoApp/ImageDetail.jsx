import React from 'react';
import { Image, Text, View } from 'react-native';

const ImageDetail = function ({ title, image }) {
  return (
    <View>
      <Image source={image} />
      <Text>{title}</Text>
    </View>
  );
};

export default ImageDetail;
