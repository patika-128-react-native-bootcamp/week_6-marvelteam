import React from 'react';
import {View, Text, Image, ScrollView, FlatList, ActivityIndicator} from 'react-native';

import styles from './CharacterDetailLayout.style';
import ComicsCard from '../ComicsCard';

const CharacterDetailLayout = ({comicsData, characterData, loading}) => {


  const comicsDetail = () => {
    return (
      <View style={styles.inner_container}>
        <Image
          style={styles.thumbnail}
          source={{uri: `${characterData.thumbnail.path}.jpg`}}
        />
        <Text style={styles.title}>{characterData.name}</Text>
        <Text style={styles.description}>
          {characterData.description == '#N/A' ||
          characterData.description == '' ||
          characterData.description == null
            ? 'Description Not Found'
            : characterData.description}
        </Text>
        <Text style={styles.title}>Comics</Text>
      </View>
    );
  };

  const renderCharacters = ({item}) => {
    return <ComicsCard comicData={item} />;
  };

  return (
    <ScrollView style={styles.container}>
       {comicsDetail()}
       {loading && <ActivityIndicator size={30} />}
       <FlatList
        horizontal={true}
        data={comicsData}
        renderItem={renderCharacters}       
      />  
    </ScrollView>
  );
};
export default CharacterDetailLayout;
