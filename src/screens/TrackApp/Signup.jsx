import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../../components/Spacer';

const Signup = function () {
  const [formValues, setFormValues] = useState({ email: '', password: '' });
  return (
    <View style={styles.parent}>
      <Spacer>
        <Text h3 style={styles.title}>
          Signup for Tracker
        </Text>
      </Spacer>
      <Input
        autoCapitalize="none"
        autoComplete={false}
        label="Email"
        value={formValues.email}
        onChangeText={(newEmail) => {
          setFormValues({ ...formValues, email: newEmail });
        }}
      />
      <Spacer />
      <Input
        autoCapitalize="none"
        autoComplete={false}
        secureTextEntry
        label="Password"
        value={formValues.password}
        onChangeText={(newPass) => {
          setFormValues({ ...formValues, password: newPass });
        }}
      />
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
