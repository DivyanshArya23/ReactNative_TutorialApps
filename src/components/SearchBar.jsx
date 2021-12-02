import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import vars from '../assets/vars';

const SearchBar = function ({
  value = '',
  onChange = () => {},
  onSubmit = () => {},
}) {
  return (
    <View>
      <View style={styles.backgroundStyle}>
        <Feather name="search" style={styles.searchIcon} />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={onChange}
          value={value}
          style={styles.inputStyle}
          placeholder="Search"
          onEndEditing={onSubmit}
        />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: vars.grey,
    marginHorizontal: 20,
    marginVertical: 20,
    padding: 10,
    borderRadius: 8,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  inputStyle: {
    marginLeft: 5,
    fontSize: 20,
    flex: 1,
  },
  searchIcon: {
    fontSize: 25,
    alignSelf: 'center',
  },
});
