import { EvilIcons } from '@expo/vector-icons';
import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
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

ShowBlogScreen.navigationOptions = ({ navigation }) => {
  const id = navigation.getParam('id');
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() => navigation.navigate('BlogApp-EditBlog', { id })}
      >
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    ),
  };
};

export default ShowBlogScreen;

const styles = StyleSheet.create({});
