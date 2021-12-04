import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import ColorBox from '../../components/DemoApp/ColorBox';
import { getRandomColor } from '../../helpers';

const ColorScreen = function () {
  const [boxArray, setBoxArray] = useState([]);

  function addColor(color) {
    setBoxArray([...boxArray, color]);
  }
  return (
    <View>
      <Button
        title="Add Color"
        onPress={() => {
          addColor(getRandomColor());
        }}
      />
      <Text>ColorScreen</Text>
      <FlatList
        keyExtractor={(item) => item}
        data={boxArray}
        renderItem={({ item }) => {
          return (
            <ColorBox
              color={item}
              height={styles.colorBox.height}
              width={styles.colorBox.width}
            />
          );
        }}
      />
    </View>
  );
};

export default ColorScreen;

const styles = StyleSheet.create({
  colorBox: {
    height: 50,
    width: 50,
  },
});
