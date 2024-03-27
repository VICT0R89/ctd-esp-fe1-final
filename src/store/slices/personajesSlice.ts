// personajesSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SingleCharacter } from '../../tipos/tipos';

interface PersonajesState {
  loading: boolean;
  error: string | null;
  personajes: SingleCharacter[];
}

const initialState: PersonajesState = {
  loading: false,
  error: null,
  personajes: [],
};

const personajesSlice = createSlice({
  name: 'personajes',
  initialState,
  reducers: {
    fetchPersonajes: () => {},
    obtenerPersonajesExito: (state, action: PayloadAction<SingleCharacter[]>) => {
      state.loading = false;
      state.error = null;
      state.personajes = action.payload;
    },
    obtenerPersonajesFallo: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchPersonajes, obtenerPersonajesExito, obtenerPersonajesFallo } = personajesSlice.actions;

export default personajesSlice.reducer;
