import React, { useState, useEffect } from "react";
import axios from "../axios/yelp";
import { apiEndpoints } from "../../config/apiEndpoints";

const useBusiness = () => {
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

  return [searchAPI, results, error];
};

export default useBusiness;
