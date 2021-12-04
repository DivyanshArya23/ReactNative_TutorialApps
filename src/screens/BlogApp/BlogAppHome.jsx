import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import BlogContext from '../../utils/context/BlogContext';

const BlogAppHome = function () {
  const blogPosts = useContext(BlogContext);
  return (
    <View>
      <Text>Blog Home</Text>
      <FlatList
        data={blogPosts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

export default BlogAppHome;

const styles = StyleSheet.create({});
