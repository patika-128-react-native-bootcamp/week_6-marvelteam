import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './CircleCharacter.style';

const CircleCharacter = ({thumbnail, title}) => {

  return (
    <TouchableWithoutFeedback >
      <View style={styles.container}>
        <Image style={styles.thumbnail} source={{uri: `${thumbnail}.jpg`}} />
        <View style={styles.title_container}>
          <Text style={styles.title}>
            {title}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default CircleCharacter;
