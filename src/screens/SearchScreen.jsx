import React, { useState } from 'react';
import { Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import useBusiness from '../utils/hooks/useBusiness';

const SearchScreen = function () {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchAPI, results, error] = useBusiness();

  return (
    <View>
      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        onSubmit={() => {
          searchAPI(searchTerm);
        }}
      />
      <Text>{searchTerm}</Text>
      {error ? <Text>{error}</Text> : null}
      <Text> We have found {results?.length} results</Text>
    </View>
  );
};

export default SearchScreen;
