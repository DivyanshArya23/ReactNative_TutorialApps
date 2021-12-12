import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../Spacer';
import NavLink from './TextLink';

const Data = {
  'Sign in': {
    heading: 'Signin for Tracker App',
    linkText: "Don't have an account ? Sing up here",
    routeToRedirect: 'TrackAppSignup',
    submitBtnText: 'Sign In',
  },
  'Sign up': {
    heading: 'Signup for Tracker App',
    text: ' Already have an account ? Sing in Instead',
    routeToRedirect: 'TrackAppSignin',
    submitBtnText: 'Sign Up',
  },
};

const AuthForm = function ({ authType = '', onSubmit = () => {}, error = '' }) {
  const [formValues, setFormValues] = useState({ email: '', password: '' });
  return (
    <View style={styles.parent}>
      <Spacer>
        <Text h3 style={styles.title}>
          {Data[authType].heading}
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
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Spacer>
        <Button
          title={Data[authType].submitBtnText}
          onPress={() => {
            onSubmit(formValues);
          }}
        />
      </Spacer>
      {/* eslint-disable react/jsx-props-no-spreading */}
      <NavLink
        text={Data[authType].linkText}
        routeToRedirect={Data[authType].routeToRedirect}
      />
    </View>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
});
