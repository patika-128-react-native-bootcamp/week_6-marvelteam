import React, {useContext} from 'react';
import { useNavigation } from '@react-navigation/core';
import {View, Text, Image, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './CircleCharacter.style';
import Routes from '../../navigation/Routes';
import {FavoritesContext} from '../../context/FavoriteContext/FavoriteProvider';


const CircleCharacter = ({characterData}) => {
  const navigation = useNavigation();
  const {dispatch} = useContext(FavoritesContext);
  
  const handleAddFavorites = favorite => 
    dispatch({
      type: 'ADD_TO_FAVORITES',
      payload: {
        favorite,
      },
    });
  

  const handleGoDetail = () => {
    navigation.navigate(Routes.CHARACTER_DETAIL_PAGE, {characterData: characterData});
  };


  return (
    <TouchableWithoutFeedback onPress={handleGoDetail}>
      <View style={styles.container}>
        <Image style={styles.thumbnail} source={{uri: `${characterData.thumbnail.path}.jpg`}} />
        <View style={styles.title_container}>
          <Text style={styles.title}>
            {characterData.name}
          </Text>
          <TouchableOpacity style={styles.favorite_button} onPress={() => handleAddFavorites(characterData)}>
            <Icon name="heart-outline" size={30} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default CircleCharacter;
