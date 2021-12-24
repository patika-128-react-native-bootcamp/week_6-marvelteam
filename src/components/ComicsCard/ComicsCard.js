import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, Image, ImageBackground} from 'react-native';
import {TouchableOpacity, TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './ComicsCard.styles';

const ComicsCard = ({comicData}) => {
  const navigation = useNavigation();
  const thumbnail = `${comicData.thumbnail.path}` + '.jpg';

  const onPresss = () => {
   // navigation.navigate(Routes.DETAIL_PAGE, {comicData: comicData});
  };

  return (
    <TouchableWithoutFeedback onPress={onPresss}>
      <View style={styles.container}>
        <ImageBackground style={styles.image} source={{uri: thumbnail}}>
          <View style={styles.title_container}>
            <Text numberOfLines={2} style={styles.title}>
              {comicData.title}
            </Text>
            <TouchableOpacity 
            style={styles.favorite_button}
            >
              <Icon name="heart-outline" size={30} color="#b71c1c" />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ComicsCard;
