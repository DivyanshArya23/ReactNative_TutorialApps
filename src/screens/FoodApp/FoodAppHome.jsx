import React, { useState } from 'react';
import { Text, ScrollView } from 'react-native';
import SearchBar from '../../components/FoodApp/SearchBar';
import useBusiness from '../../utils/hooks/useBusiness';
import BusinessList from '../../components/FoodApp/BusinessList';
import { filterByPrice } from '../../helpers';

const FoodAppHome = function () {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchAPI, results, error] = useBusiness();

  return (
    <>
      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        onSubmit={() => {
          searchAPI(searchTerm);
        }}
      />
      <Text>{searchTerm}</Text>
      {error ? <Text>{error}</Text> : null}
      {/* <Text> We have found {results?.length} results</Text> */}
      <ScrollView>
        <BusinessList
          title="Cost Effective"
          list={filterByPrice(results, '$')}
        />
        <BusinessList title="Bit Pricier" list={filterByPrice(results, '$$')} />
        <BusinessList
          title="Big Spender"
          list={filterByPrice(results, undefined)}
        />
      </ScrollView>
    </>
  );
};

export default FoodAppHome;
