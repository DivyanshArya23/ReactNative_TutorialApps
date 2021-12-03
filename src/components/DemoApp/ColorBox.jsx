import React from 'react';
import { View } from 'react-native';

const ColorBox = function ({
  color = '#ffaaaa',
  height = 50,
  width = 50,
  style = {},
}) {
  const boxStyle = {
    backgroundColor: color,
    height,
    width,
  };
  return <View style={{ ...boxStyle, ...style }} />;
};

export default ColorBox;
