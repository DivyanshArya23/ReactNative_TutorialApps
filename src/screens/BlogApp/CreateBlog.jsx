import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Context as blogContext } from '../../utils/context/BlogContext';

const CreateBlog = function ({ navigation }) {
  const { addBlogPost } = useContext(blogContext);
  const [formData, setFormData] = useState({ title: '', content: '' });

  return (
    <View>
      <Text style={styles.heading}>Create Blog</Text>
      <Text style={styles.label}>Enter Title :</Text>
      <TextInput
        value={formData.title}
        onChangeText={(text) => {
          setFormData({ ...formData, title: text });
        }}
        style={{ ...styles.input }}
      />
      <Text style={styles.label}>Enter Content :</Text>
      <TextInput
        value={formData.content}
        onChangeText={(content) => {
          setFormData({ ...formData, content });
        }}
        style={{ ...styles.input, ...styles.content }}
      />
      <Button
        title="Add Blog Post"
        onPress={() => {
          addBlogPost(formData.title, formData.content, () => {
            navigation.navigate('BlogApp-Home');
          });
        }}
        style={styles.submitBtn}
      />
    </View>
  );
};

export default withNavigation(CreateBlog);

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 20,
    marginLeft: 5,
    marginBottom: 5,
  },
  input: {
    marginBottom: 15,
    borderWidth: 1,
    fontSize: 18,
    padding: 5,
    margin: 5,
  },
  content: {
    justifyContent: 'flex-start',
  },
  submitBtn: {},
});
