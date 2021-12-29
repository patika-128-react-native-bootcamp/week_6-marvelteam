import React from 'react';
import FavoritesProvider from './context/FavoriteContext/FavoriteProvider';

import Navigation from './navigation/Navigation';

export default function App() {
  return (
    <FavoritesProvider>
      <Navigation />
    </FavoritesProvider>
  );
}
