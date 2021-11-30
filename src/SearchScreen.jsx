import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "./components/SearchBar";
import { apiEndpoints } from "./config/apiEndpoints";
import axios from "./utils/axios/yelp";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const searchAPI = async (searchKeyword) => {
    try {
      const res = await axios.get(apiEndpoints.search, {
        params: {
          term: searchKeyword,
          limit: 50,
          location: "san jose",
        },
      });
      setResults(res?.data?.businesses);
    } catch (error) {
      setResults([]);
      setError("Something Went Wrong");
      console.log(error);
    }
  };

  useEffect(() => {
    searchAPI("pasta");
  }, []);

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
