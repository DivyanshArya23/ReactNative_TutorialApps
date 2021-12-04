import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import BlogContext from '../../utils/context/BlogContext';

const BlogAppHome = function () {
  const { data: blogPosts, addBlogPost } = useContext(BlogContext);
  return (
    <View>
      <Text style={styles.title}>Blog Home</Text>
      <Button
        title="Add Blog"
        onPress={() => {
          addBlogPost();
        }}
      />
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

const styles = StyleSheet.create({
  title: { fontSize: 20 },
});
