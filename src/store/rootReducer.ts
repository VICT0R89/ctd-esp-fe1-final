import { combineReducers } from "redux";
// slices
import favoriteSlice from "./slices/favoriteSlice";
import personajesSlice from "./slices/personajesSlice";


export const rootReducer = combineReducers({
  favorite: favoriteSlice,
  personajes: personajesSlice,
});