import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button } from 'react-native-elements';

const Signin = function ({ navigation }) {
  return (
    <View>
      <Text h3 style={styles.title}>
        Signin
      </Text>
      <Button
        title="Go to SignUp"
        onPress={() => {
          navigation.navigate('TrackAppSignup');
        }}
      />
      <Button
        title="Go to Main Flow"
        onPress={() => {
          navigation.navigate('trackAppMainFlow');
        }}
      />
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  title: {
    fontSize: 48,
  },
});
