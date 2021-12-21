import React, {useEffect, useState} from 'react';
import axios from 'axios';

const URL = 'http://gateway.marvel.com/v1/public/';
const hash = '46e962e839279e382a926a6c2b7f8a43';
const AUTH =
  '?ts=100&apikey=11860179da28bf22d4dd20bbf36b2e66&hash='+hash;

const useFetch = prop => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      console.log(`${URL}${prop}${AUTH}`);
      const response = await axios.get(`${URL}${prop}${AUTH}`);
      setData(response.data);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {loading, error, data};
};

export default useFetch;
