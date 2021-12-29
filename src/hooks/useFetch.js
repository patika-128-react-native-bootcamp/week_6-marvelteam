import React, {useEffect, useState} from 'react';
import axios from 'axios';

const URL = 'http://gateway.marvel.com/v1/public/';
const hash = '68637938a7e037ce79c9682283bda70c ';
const LIMIT = '?ts=1';
const AUTH = '&apikey=11860179da28bf22d4dd20bbf36b2e66&hash=' + hash;

const useFetch = (prop, initialParams = '', skip = false) => {
  const [params, setParams] = useState(initialParams);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [refetchIndex, setRefetchIndex] = useState(0);

  const refetch = () => {
    setRefetchIndex(prevRefetchIndex => prevRefetchIndex + 1);
  };

  const fetchData = async () => {
    if (skip) return;

    try {
      const response = await axios.get(`${URL}${prop}${LIMIT}${params}${AUTH}`);
      setData(response.data.data.results);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [prop, params, refetchIndex]);

  return {loading, error, data, setParams, refetch};
};

export default useFetch;
