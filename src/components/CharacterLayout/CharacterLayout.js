import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';

import Input from '../Input';
import styles from './CharacterLayout.styles';
import CircleCharacter from '../CircleCharacter';
import useFetch from '../../hooks/useFetch';


const CharacterLayout = () => {
  const [search, setSearch] = useState('');
  const {loading, error, data, setParams, refetch} = useFetch('characters');

  useEffect(() => {
    if (data !== null) {
      setParams(search);
    }
  }, [search]);

  const getText = text => {
    if (text === '') {
      setSearch('');
    } else {
      setSearch('&nameStartsWith=' + text);
    }
    refetch();
  };

  const renderComics = ({item}) => {
    return <CircleCharacter thumbnail={item.thumbnail.path} title={item.name} />;
  };

  
  return (
    <View style={styles.container}>
      <Input searchText={getText} placeHolder="Searc for characters.." />
      {loading && <ActivityIndicator size="large" />}
      <FlatList data={data} renderItem={renderComics} numColumns={3} />
    </View>
  );
};

export default CharacterLayout;