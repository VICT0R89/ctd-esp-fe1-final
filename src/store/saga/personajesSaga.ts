import { takeLatest, call, put } from 'redux-saga/effects';
import { fetchPersonajes, obtenerPersonajesExito, obtenerPersonajesFallo } from '../slices/personajesSlice';
import { SingleCharacter } from '../../tipos/tipos';

function* fetchPersonajesSaga() {
  try {
    const response: Response = yield call(fetch, 'https://rickandmortyapi.com/api/character')
    if (!response.ok) {
      throw new Error('No se pudo obtener la información de los personajes');
    }
    const data: { results: SingleCharacter[] } = yield response.json();
    yield put(obtenerPersonajesExito(data.results));
  } catch (error: any) {
    yield put(obtenerPersonajesFallo(error.message));
  }
}

export function* personajesSaga() {
  yield takeLatest(fetchPersonajes.type, fetchPersonajesSaga);
}
