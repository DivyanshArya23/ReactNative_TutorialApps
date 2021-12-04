import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BlogContext from '../../utils/context/BlogContext';

const BlogAppHome = function () {
  const value = useContext(BlogContext);
  return (
    <View>
      <Text>Blog Home</Text>
      <Text>{value}</Text>
    </View>
  );
};

export default BlogAppHome;

const styles = StyleSheet.create({});
