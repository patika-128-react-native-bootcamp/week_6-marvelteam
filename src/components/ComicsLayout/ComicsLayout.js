import React from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';

import styles from './ComicsLayout.styles';
import ComicsCard from '../ComicsCard';
import useFetch from '../../hooks/useFetch';

const ComicsLayout = () => {
  const {loading, error, data, setParams, refetch} = useFetch('comics');

  const renderComics = ({item}) => {
    return <ComicsCard comicData={item} />;
  };

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" />}
      <FlatList data={data} renderItem={renderComics} numColumns={2} />
    </View>
  );
};

export default ComicsLayout;
