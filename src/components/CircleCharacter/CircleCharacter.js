import React from 'react';
import { useNavigation } from '@react-navigation/core';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './CircleCharacter.style';
import Routes from '../../navigation/Routes';


const CircleCharacter = ({characterData}) => {
  const navigation = useNavigation();

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
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default CircleCharacter;
