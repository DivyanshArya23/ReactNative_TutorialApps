import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { Context as BlogContext } from '../../utils/context/BlogContext';
import ActionBtn from '../../components/BlogApp/ActionBtn';

const BlogAppHome = function () {
  const {
    state: blogPosts,
    addBlogPost,
    deleteBlogPost,
  } = useContext(BlogContext);
  return (
    <View>
      <Text style={styles.title}>Blog Home</Text>
      <Button
        title="Add Blog"
        onPress={() => {
          addBlogPost();
        }}
      />
      <View style={styles.blogBtnParent}>
        <FlatList
          data={blogPosts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <ActionBtn
                title={item.title || ''}
                id={item.id || ''}
                actionFunc={() => {
                  deleteBlogPost(item.id);
                }}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default BlogAppHome;

const styles = StyleSheet.create({
  title: { fontSize: 20 },
  blogBtnParent: {
    marginHorizontal: 5,
    marginVertical: 10,
  },
});
