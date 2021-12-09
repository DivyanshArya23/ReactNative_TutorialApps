import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../../components/Spacer';

const Signup = function () {
  return (
    <View>
      <Spacer>
        <Text h3 style={styles.title}>
          Signup for Tracker
        </Text>
      </Spacer>
      <Input label="Email" />
      <Spacer />
      <Input label="Password" />
      <Spacer>
        <Button title="Sign Up" />
      </Spacer>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  title: {
    fontSize: 48,
  },
});
