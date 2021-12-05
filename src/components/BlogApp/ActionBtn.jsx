import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';

const ActionBtn = function ({ title, actionFunc, navigation, id }) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('BlogApp-ShowBlogScreen', { id });
      }}
    >
      <View style={styles.parent}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.icon}>
          <TouchableOpacity onPress={actionFunc}>
            <AntDesign name="delete" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default withNavigation(ActionBtn);

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
  parent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 2,
    padding: 8,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
  },
  icon: {
    borderColor: 'black',
    borderWidth: 1,
  },
});
