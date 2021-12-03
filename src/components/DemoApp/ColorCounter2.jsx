import React from 'react';
import { Text, View, Button } from 'react-native';

const ColorCounter2 = function ({ color, dispatch, jumpValue = 1 }) {
  return (
    <View>
      <Text>{color}</Text>
      <Button
        title={`+ ${color}`}
        onPress={() => {
          dispatch({
            type: `change_${color.toLowerCase()}`,
            payload: jumpValue,
          });
        }}
      />
      <Button
        title={`- ${color}`}
        onPress={() => {
          dispatch({
            type: `change_${color.toLowerCase()}`,
            payload: -1 * jumpValue,
          });
        }}
      />
    </View>
  );
};

export default ColorCounter2;
