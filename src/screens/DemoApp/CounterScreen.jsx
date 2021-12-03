import React, { useReducer } from 'react';
import { Text, View, Button } from 'react-native';

const initialState = {
  value: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'inc':
      return { ...state, value: state.value + action.payload };
    case 'dec':
      return { ...state, value: state.value - action.payload };
    default:
      return state;
  }
};
const CounterScreen = function () {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { value } = state;
  const COUNTER_VALUE_CHANGE = 1;
  return (
    <View>
      <Button
        title="increase"
        onPress={() => {
          dispatch({ type: 'inc', payload: COUNTER_VALUE_CHANGE });
        }}
      />
      <Button
        title="decrease"
        onPress={() => {
          dispatch({ type: 'dec', payload: COUNTER_VALUE_CHANGE });
        }}
      />
      <Text>Current Count: {value}</Text>
    </View>
  );
};

export default CounterScreen;
