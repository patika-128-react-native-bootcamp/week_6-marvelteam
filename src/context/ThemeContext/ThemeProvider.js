import React, {createContext, useEffect, useState} from 'react';
import {Appearance} from 'react-native';

import light from '../../themes/light';
import dark from '../../themes/dark';

export const ThemeContext = createContext();

export default function ThemeProvider({children}) {
  const [theme, setTheme] = useState(Appearance.getColorScheme());

  useEffect(() => {
    Appearance.addChangeListener(scheme => {
      setTheme(scheme.colorScheme);
    });
  }, [theme]);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>{children}</ThemeContext.Provider>
  );
}