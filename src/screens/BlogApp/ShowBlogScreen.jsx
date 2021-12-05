import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Context as blogContext } from '../../utils/context/BlogContext';

const ShowBlogScreen = function ({ navigation }) {
  const { state } = useContext(blogContext);
  const id = navigation.getParam('id');
  const blogPost = state.find((blog) => blog.id === id);

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

export default ShowBlogScreen;

const styles = StyleSheet.create({});
