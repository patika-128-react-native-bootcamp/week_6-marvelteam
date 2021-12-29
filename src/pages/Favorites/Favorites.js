import React, { useContext } from "react";
import { Dimensions, Text, View } from "react-native";
import Carousel from 'react-native-snap-carousel';

import {FavoritesContext} from '../../context/FavoriteContext/FavoriteProvider';
import styles from './Favorites.styles';
import FavoriteCard from "../../components/FavoriteCard";
const {width} = Dimensions.get('window');

const Favorites = () => {
const {state, dispatch} = useContext(FavoritesContext);
const {favoritesList} = state;


const renderFavorites = ({item}) => {
    return (
        <FavoriteCard
        favorites={item}
        onPress={() => handleRemoveFavorites(item)} />
    );
};

const handleRemoveFavorites = favorite => {
    dispatch({type: 'REMOVE_FROM_FAVORITES', payload: {favorite}});
}

    return (
        <View style={styles.container}>
            <Carousel
            data={favoritesList}
            renderItem={renderFavorites}
            sliderWidth={width}
            itemWidth={width * 0.71} />
        </View>
    )
}

export default Favorites;