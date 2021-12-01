import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import useBusiness from "../utils/hooks/useBusiness";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
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

const styles = StyleSheet.create({});
