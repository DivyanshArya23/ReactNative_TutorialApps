import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "./components/SearchBar";
import { apiEndpoints } from "./config/apiEndpoints";
import axios from "./utils/axios/yelp";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const searchAPI = async () => {
    try {
      const res = await axios.get(apiEndpoints.search, {
        params: {
          term: searchTerm,
          limit: 50,
          location: "san jose",
        },
      });
      setResults(res?.data?.businesses);
    } catch (error) {
      setResults([]);
      console.log(error);
    }
  };

  return (
    <View>
      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        onSubmit={searchAPI}
      />
      <Text>{searchTerm}</Text>
      <Text> We have found {results?.length} results</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
