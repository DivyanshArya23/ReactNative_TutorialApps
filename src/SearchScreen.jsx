import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "./components/SearchBar";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <View>
      <SearchBar
        value={searchTerm}
        onChange={(newTerm) => setSearchTerm(newTerm)}
        onSubmit={()=>{console.log('term submitted')}}
      />
      <Text>{searchTerm}</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
