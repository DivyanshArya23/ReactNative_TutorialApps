import React, { useContext, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Context as BlogContext } from '../../utils/context/BlogContext';
import ActionBtn from '../../components/BlogApp/ActionBtn';

const BlogAppHome = function ({ navigation }) {
  const {
    state: blogPosts,
    addBlogPost,
    deleteBlogPost,
    getBlogPosts,
  } = useContext(BlogContext);

  useEffect(() => {
    getBlogPosts();
    const listener = navigation.addListener('didFocus', () => {
      getBlogPosts();
    });
    return () => {
      listener.remove();
    };
  }, []);

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

BlogAppHome.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('BlogApp-CreateBlogScreen');
        }}
      >
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
};

export default BlogAppHome;

const styles = StyleSheet.create({
  title: { fontSize: 40, fontWeight: 'bold', textAlign: 'center' },
  blogBtnParent: {
    marginHorizontal: 5,
    marginVertical: 10,
  },
});
