import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const EditBlogScreen = function ({ navigation }) {
  const id = navigation.getParam('id');
  return (
    <View>
      <Text>EDIT-{id}</Text>
    </View>
  );
};

export default EditBlogScreen;

const styles = StyleSheet.create({});
