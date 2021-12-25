import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';

import Input from '../Input';
import styles from './ComicsLayout.styles';
import ComicsCard from '../ComicsCard';
import useFetch from '../../hooks/useFetch';


const ComicsLayout = () => {
  const [search, setSearch] = useState('');
  const {loading, error, data, setParams, refetch} = useFetch('comics');

  useEffect(() => {
    if (data !== null) {
      setParams(search);
    }
  }, [search]);

  const getText = text => {
    if (text === '') {
      setSearch('');
    } else {
      setSearch('&titleStartsWith=' + text);
    }
    refetch();
  };

  const renderComics = ({item}) => {
    return <ComicsCard comicData={item} />;
  };

  
  return (
    <View style={styles.container}>
      <Input searchText={getText} placeHolder="Searc for comics.." />
      {loading && <ActivityIndicator size="large" />}
      <FlatList data={data} renderItem={renderComics} numColumns={2} />
    </View>
  );
};

export default ComicsLayout;