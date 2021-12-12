import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../../components/TrackApp/AuthForm';
import { Context as AuthContext } from '../../utils/context/AuthContext';

const Signin = function () {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);
  return (
    <View style={styles.parent}>
      <NavigationEvents
        onWillBlur={clearErrorMessage}
        onWillFocus={clearErrorMessage}
      />
      <AuthForm
        authType="Signin"
        onSubmit={signin}
        error={state.errorMessage}
      />
    </View>
  );
};

Signin.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default Signin;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: 'center',
  },
});
