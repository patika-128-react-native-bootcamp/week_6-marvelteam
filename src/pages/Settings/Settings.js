import React, {useContext, useState} from 'react';
import {Text, View, Switch} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import {useTranslation} from 'react-i18next';


import {ThemeContext} from '../../context/ThemeContext/ThemeProvider';
import colors from '../../styles/colors';
import styles from './Settings.styles';

const Settings = () => {
  const {t, i18n} = useTranslation();
  const {theme, setTheme} = useContext(ThemeContext);
  const [switchValue, setSwitchValue] = useState(false);

  const languages = [
    {label: 'English', value: 'en'},
    {label: 'Spanish', value: 'sp'},
  ];

  const modeUpdated = theme => {
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
          trackColor={{
            false: colors.primaryLight,
            true: colors.primaryExtraLight,
          }}
          thumbColor={switchValue ? colors.primary : colors.primaryLight}
          value={switchValue}
          onValueChange={value => modeUpdated(value ? 'dark' : 'light')}
        />
      </View>
      <Text style={styles.text}>{t('Languages')}</Text>
      <SwitchSelector
        options={languages}
        hasPadding
        initial={0}
        onPress={language => {
          i18n.changeLanguage(language);
        }}
        buttonColor={colors.primary}
      />
    </View>
  );
};
export default Settings;
