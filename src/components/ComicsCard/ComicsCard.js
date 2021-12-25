import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, View, ImageBackground} from 'react-native';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Routes from '../../navigation/Routes';

import styles from './ComicsCard.styles';

const ComicsCard = ({comicData}) => {
  const navigation = useNavigation();
  const thumbnail = `${comicData.thumbnail.path}` + '.jpg';

  const handleGoDetail = () => {
    navigation.navigate(Routes.COMIC_DETAIL_PAGE, {comicData: comicData});
  };

  return (
    <TouchableWithoutFeedback onPress={handleGoDetail}>
      <View style={styles.container}>
        <ImageBackground style={styles.image} source={{uri: thumbnail}}>
          <View style={styles.title_container}>
            <Text numberOfLines={2} style={styles.title}>
              {comicData.title}
            </Text>
          </View>
          <TouchableOpacity style={styles.favorite_button}>
            <Icon name="heart-outline" size={30} color="red" />
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ComicsCard;
