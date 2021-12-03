import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ColorBox from '../../components/DemoApp/ColorBox';
import ColorCounter from '../../components/DemoApp/ColorCounter';

const SquareScreen = function () {
  const [red, setRed] = useState(255);
  const [green, setGreen] = useState(255);
  const [blue, setBlue] = useState(255);
  const [color, setColor] = useState('rgb(255,255,255)');
  const COLOR_VALUE_CHANGE = 50;
  useEffect(() => {
    setColor(`rgb(${red},${green},${blue})`);
  }, [red, green, blue]);
  return (
    <View>
      <Text style={styles.Heading}>Square Screen</Text>
      <ColorCounter
        color="Red"
        counter={red}
        setCounter={setRed}
        jumpValue={COLOR_VALUE_CHANGE}
      />
      <ColorCounter
        color="Green"
        counter={green}
        setCounter={setGreen}
        jumpValue={COLOR_VALUE_CHANGE}
      />
      <ColorCounter
        color="Blue"
        counter={blue}
        setCounter={setBlue}
        jumpValue={COLOR_VALUE_CHANGE}
      />
      <Text style={styles.Color}>{color}</Text>
      <ColorBox color={color} height={200} width={200} />
    </View>
  );
};

export default SquareScreen;

const styles = StyleSheet.create({
  Heading: {
    textAlign: 'center',
  },
  Color: {
    textAlign: 'center',
    marginTop: 40,
  },
});
