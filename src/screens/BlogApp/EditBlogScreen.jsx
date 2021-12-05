import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import BlogForm from '../../components/BlogApp/BlogForm';
import { Context as blogContext } from '../../utils/context/BlogContext';

const EditBlogScreen = function ({ navigation }) {
  const id = navigation.getParam('id');
  const { state, editBlogPost } = useContext(blogContext);

  const blogPost = state.find((blog) => blog.id === id);

  return (
    <BlogForm
      initialValue={blogPost}
      onSubmit={(updatedBlog) => {
        editBlogPost(updatedBlog, () => {
          navigation.pop();
        });
      }}
    />
  );
};

export default EditBlogScreen;

const styles = StyleSheet.create({});
