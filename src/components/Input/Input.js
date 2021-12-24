import React from 'react';
import {TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../../styles/colors';
import styles from './Input.styles';

const Input = ({searchText, placeHolder}) => {
 
  return (
      <View style={styles.container}>
        <TextInput
          onChangeText={searchText}
          placeholderTextColor={colors.primary}
          placeholder={placeHolder}
        />
        <Icon name="magnify" size={25} color={colors.primaryLight}/>
      </View>    
  );
};

export default Input;
