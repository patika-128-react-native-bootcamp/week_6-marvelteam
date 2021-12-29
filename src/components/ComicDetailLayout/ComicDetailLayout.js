import React from 'react';
import {View, Text, Image, ScrollView, FlatList, ActivityIndicator} from 'react-native';
import styles from './ComicDetailLayout.style';
import CircleCharacter from '../CircleCharacter/CircleCharacter';

const ComicDetailLayout = ({comicData, charactersData, loading}) => {

  const comicsDetail = () => {
    return (
      <View style={styles.inner_container}>
        <Image
          style={styles.thumbnail}
          source={{uri: `${comicData.thumbnail.path}.jpg`}}
        />
        <Text style={styles.title}>{comicData.title}</Text>
        <Text style={styles.description}>
          {comicData.description == '#N/A' ||
          comicData.description == '' ||
          comicData.description == null
            ? 'Description Not Found'
            : comicData.description}
        </Text>
        <Text style={styles.title}>Characters</Text>
      </View>
    );
  };

  const renderCharacters = ({item}) => {
    return <CircleCharacter characterData={item} />;
  };

  return (
    <ScrollView style={styles.container}>
       {comicsDetail()}
       {loading && <ActivityIndicator size={30} />}
       <FlatList
        horizontal={true}
        data={charactersData}
        renderItem={renderCharacters}       
      />  
    </ScrollView>
  );
};
export default ComicDetailLayout;
