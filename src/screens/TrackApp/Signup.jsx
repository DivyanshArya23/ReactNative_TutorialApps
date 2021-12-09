import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../../components/Spacer';

const Signup = function () {
  return (
    <View style={styles.parent}>
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

Signup.navigationOptions = () => {
  return {
    headerShown: false,
  };
};
export default Signup;

const styles = StyleSheet.create({
  title: {
    // fontSize: 48,
  },
  parent: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 100,
  },
});
