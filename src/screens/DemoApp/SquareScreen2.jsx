import React, { useReducer } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ColorBox from '../../components/DemoApp/ColorBox';
import ColorCounter2 from '../../components/DemoApp/ColorCounter2';

const initialState = {
  red: 0,
  green: 0,
  blue: 0,
};

const reducer = (state, actn) => {
  const action = { ...actn };
  const colorName = action.type.split('_')[1];
  if (state[colorName] + action.payload > 255) {
    action.payload = 255 - state[colorName];
  } else if (state[colorName] + action.payload < 0) {
    action.payload = -1 * state[colorName];
  }
  switch (action.type) {
    case 'change_red':
      return { ...state, red: state.red + action.payload };
    case 'change_green':
      return { ...state, green: state.green + action.payload };
    case 'change_blue':
      return { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};
const SquareScreen2 = function () {
  const [state, dispatch] = useReducer(reducer, initialState);
  const COLOR_VALUE_CHANGE = 50;

  return (
    <View>
      <Text style={styles.center}>Square Screen 2</Text>
      <ColorCounter2
        color="Red"
        counter={state.red}
        dispatch={dispatch}
        jumpValue={COLOR_VALUE_CHANGE}
      />
      <ColorCounter2
        color="Green"
        counter={state.green}
        dispatch={dispatch}
        jumpValue={COLOR_VALUE_CHANGE}
      />
      <ColorCounter2
        color="Blue"
        counter={state.blue}
        dispatch={dispatch}
        jumpValue={COLOR_VALUE_CHANGE}
      />
      <Text
        style={styles.Color}
      >{`rgb(${state.red},${state.green},${state.blue})`}</Text>
      <ColorBox
        style={styles.center}
        color={`rgb(${state.red},${state.green},${state.blue})`}
        height={200}
        width={200}
      />
    </View>
  );
};

export default SquareScreen2;

const styles = StyleSheet.create({
  center: {
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
  },
  Color: {
    textAlign: 'center',
    marginTop: 40,
  },
});
