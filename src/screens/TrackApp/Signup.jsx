import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import AuthForm from '../../components/TrackApp/AuthForm';
import { Context as AuthContext } from '../../utils/context/AuthContext';

const Signup = function () {
  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.parent}>
      <AuthForm
        authType="Signup"
        onSubmit={signup}
        error={state.errorMessage}
      />
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
  parent: {
    flex: 1,
    justifyContent: 'center',
  },
});
