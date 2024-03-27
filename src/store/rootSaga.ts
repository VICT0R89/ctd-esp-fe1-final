import { all } from 'redux-saga/effects';
import { personajesSaga } from './saga/personajesSaga';

export default function* rootSaga() {
  yield all([
    personajesSaga(),
  ]);
}