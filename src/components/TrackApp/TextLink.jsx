import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

const TextLink = function ({ text, routeToRedirect, navigation }) {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(routeToRedirect);
        }}
      >
        <Text style={styles.signupText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default withNavigation(TextLink);

const styles = StyleSheet.create({
  signupText: {
    color: '#0088ff',
    textAlign: 'center',
  },
});
