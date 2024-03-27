import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { BotonFavoritoProps } from '../../tipos/tipos'

interface FavoriteState {
  favorites: BotonFavoritoProps[];
}

const initialState: FavoriteState = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorites(state, action: PayloadAction<BotonFavoritoProps>) {
      action.payload.esFavorito = true
      state.favorites.push(action.payload);
    },
    removeFavorites(state, action: PayloadAction<BotonFavoritoProps>) {
      action.payload.esFavorito = false
      state.favorites = state.favorites.filter(fav => fav.id !== action.payload.id)
    },
  },
})

export const { addToFavorites, removeFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer;
