import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const BlogForm = function ({ initialValue, onSubmit }) {
  const [formData, setFormData] = useState(initialValue);

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
        title="Save Blog Post"
        onPress={() => {
          onSubmit(formData);
        }}
        style={styles.submitBtn}
      />
    </View>
  );
};

BlogForm.defaultProps = {
  initialValue: { title: '', content: '' },
  onSubmit: () => {},
};
export default BlogForm;

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
