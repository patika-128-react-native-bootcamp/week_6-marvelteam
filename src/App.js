import React from 'react';
import FavoritesProvider from './context/FavoriteContext/FavoriteProvider';
import ThemeProvider from './context/ThemeContext/ThemeProvider';

import Navigation from './navigation/Navigation';

export default function App() {
  return (
    <ThemeProvider>
      <FavoritesProvider>
        <Navigation />
      </FavoritesProvider>
    </ThemeProvider>
  );
}
