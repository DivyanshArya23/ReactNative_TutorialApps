import React, { useState } from 'react';
import { Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import useBusiness from '../utils/hooks/useBusiness';
import BusinessList from '../components/BusinessList';
import { filterByPrice } from '../helpers';

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
      <BusinessList title="Cost Effective" list={filterByPrice(results, '$')} />
      <BusinessList title="Bit Pricier" list={filterByPrice(results, '$$')} />
      <BusinessList title="Big Spender" list={filterByPrice(results, '$$$')} />
    </View>
  );
};

export default SearchScreen;
