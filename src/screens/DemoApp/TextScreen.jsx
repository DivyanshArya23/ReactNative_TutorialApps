import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const TextScreen = function () {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const MAX_LENGTH = 5;
  const MIN_LENGTH = 5;
  const errors = {
    max_length: `Password Cannot be more than ${MAX_LENGTH} characters`,
    min_length: `Password Should be more than ${MIN_LENGTH} characters`,
  };
  return (
    <View>
      <Text>Text Screen</Text>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        secureTextEntry
        onChangeText={(text) => {
          setPassword(text);
          if (text.length < MIN_LENGTH) {
            setError(errors.min_length);
          } else {
            setError('');
          }
        }}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Text>Password : {password}</Text>
    </View>
  );
};

export default TextScreen;

const styles = StyleSheet.create({
  input: {
    margin: 5,
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  error: {
    color: 'red',
  },
});
