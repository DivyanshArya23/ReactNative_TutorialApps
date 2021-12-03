import React from 'react';
import { Text, View, Button } from 'react-native';

const ColorCounter = function ({ color, counter, setCounter, jumpValue = 1 }) {
  return (
    <View>
      <Text>{color}</Text>
      <Button
        title={`+ ${color}`}
        onPress={() => {
          if (counter + 1 < 256) {
            setCounter(counter + jumpValue);
          } else {
            setCounter(255);
          }
        }}
      />
      <Button
        title={`- ${color}`}
        onPress={() => {
          if (counter - 1 > -1) {
            setCounter(counter - jumpValue);
          } else {
            setCounter(0);
          }
        }}
      />
    </View>
  );
};

export default ColorCounter;
