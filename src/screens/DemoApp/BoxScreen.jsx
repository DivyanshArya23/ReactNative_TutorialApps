import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ColorBox from '../../components/DemoApp/ColorBox';

const BoxScreen = function () {
  return (
    <View>
      <View style={styles.viewStyle}>
        <Text style={styles.textOneStyle}>Child #1</Text>
        <Text style={styles.textTwoStyle}>Child #2</Text>
        <Text style={styles.textThreeStyle}>Child #3</Text>
      </View>
      <View style={styles.viewStyle2}>
        <ColorBox color="#dd5599" />
        <ColorBox color="#aabb00" style={styles.colorBox2} />
        <ColorBox color="#ffccbb" />
      </View>
      <View style={{ ...styles.viewStyle2, marginTop: 50 }}>
        <ColorBox color="#dd5599" />
        <ColorBox color="#ffccbb" />
      </View>
      <View style={styles.viewStyle3}>
        <ColorBox color="#aabb00" />
      </View>
    </View>
  );
};

export default BoxScreen;

const styles = StyleSheet.create({
  viewStyle2: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  colorBox2: {
    top: 50,
  },
  viewStyle3: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: 'red',
  },
  textTwoStyle: {
    position: 'absolute',
    fontSize: 18,
    ...StyleSheet.absoluteFillObject,
    borderWidth: 3,
    borderColor: 'red',
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: 'red',
  },
});
