import React, {useContext, useState} from 'react';
import {Text, View, Switch} from 'react-native';

import {ThemeContext} from '../../context/ThemeContext/ThemeProvider';
import colors from '../../styles/colors';
import styles from './Settings.styles';

const Settings = () => {
  const {theme, setTheme} = useContext(ThemeContext);
  const [switchValue, setSwitchValue] = useState(false);

  const modeUpdated = theme => {
    console.log(theme);
    setSwitchValue(!switchValue);
    setTheme({
      type: theme,
      payload: {
        theme,
      },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.theme_container}>
        <Text style={styles.text}>Theme</Text>
        <Switch
          trackColor={{false: colors.primaryLight, true: colors.primaryExtraLight}}
          thumbColor={switchValue ? colors.primary : colors.primaryLight}
          value={switchValue}
          onValueChange={value => modeUpdated(value ? 'dark' : 'light')}
        />
      </View>
    </View>
  );
};
export default Settings;
