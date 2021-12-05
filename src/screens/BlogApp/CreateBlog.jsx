import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import BlogForm from '../../components/BlogApp/BlogForm';
import { Context as blogContext } from '../../utils/context/BlogContext';

const CreateBlog = function ({ navigation }) {
  const { addBlogPost } = useContext(blogContext);

  return (
    <BlogForm
      onSubmit={(newBlog) => {
        addBlogPost(newBlog.title, newBlog.content, () => {
          navigation.navigate('BlogApp-Home');
        });
      }}
    />
  );
};

export default CreateBlog;

const styles = StyleSheet.create({});
