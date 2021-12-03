import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import ColorBox from '../../components/DemoApp/ColorBox';

const ColorScreen = function () {
  const [boxArray, setBoxArray] = useState([]);

  function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
  }

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
