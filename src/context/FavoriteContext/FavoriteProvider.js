import React, {createContext, useReducer, useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

import reducer from './reducer';
import store from './store';

export const FavoritesContext = createContext();

export default function FavoritesProvider({children}) {
    const [state, dispatch] = useReducer(reducer, store);

    const getStorageData = async () => {
        try {
            const response = await AsyncStorage.getItem('@favorites');
            return response != null
            ? dispatch({type: 'SET_FAVORITES', payload: JSON.parse(response)})
            : null;
        } catch (e) {
            Alert.alert(e.message);
        }
    };

    useEffect(() => {
        getStorageData();
    }, []);

    return (
        <FavoritesContext.Provider value={{state, dispatch}}>
            {children}
        </FavoritesContext.Provider>
    );
}