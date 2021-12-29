import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './FavoriteCard.styles';

const not_available =
  'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/detail.jpg';
const size = '.jpg';
const default_image =
  'http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73.jpg';

const FavoriteCard = ({favorites, onPress}) => {
  const {thumbnail, title, name} = favorites;
  const url = `${thumbnail.path}${size}`;

  const favorite_name = title == null ? name : title;
  const image = url === not_available ? default_image : url;
  

  return (
    <View style={styles.container}>
      <ImageBackground source={{uri: image}} style={styles.image}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Icon name="heart" color='red' size={30} />
        </TouchableOpacity>
      </ImageBackground>
      <View>
        <Text style={styles.title} numberOfLines={3}>
          {favorite_name}
        </Text>
      </View>
    </View>
  );
};

export default FavoriteCard;