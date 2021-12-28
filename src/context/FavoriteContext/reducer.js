import  AsyncStorage  from "@react-native-async-storage/async-storage";

export default (state, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITES': {
            const selectedItem = action.payload.favorite;
            console.log("selected item", selectedItem.id);
            const itemFavoriteIndex = state.favoritesList.findIndex(
                item => item.id === selectedItem.id,
            );
            const isInFavorites = itemFavoriteIndex !== -1;

            if(isInFavorites) {
                return state;
            }

            const updatedFavoriteList = [...state.favoritesList, selectedItem];
            AsyncStorage.setItem('@favorites', JSON.stringify(updatedFavoriteList));

            return {...state, favoritesList: updatedFavoriteList};
        }

        case 'REMOVE_FROM_FAVORITES': {
            const selectedItem = action.payload.favorite;

            const itemFavoriteIndex = state.favoritesList.findIndex(
                item => item.id === selectedItem.id,
            );

            const updatedFavoriteList = [...state.favoritesList];
            updatedFavoriteList.splice(itemFavoriteIndex, 1);
            
            AsyncStorage.setItem('@favorites', JSON.stringify(updatedFavoriteList));
            return {...state, favoritesList: updatedFavoriteList};

        }

        case 'SET_FAVORITES':
            const favorite = action.payload;
            return {...state, favoritesList: favorite};

            default:
                return state;
    }
};