// store
import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
// saga
import createSagaMiddleware from "@redux-saga/core"
// import { takeEvery } from 'redux-saga/effects'

const saga = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga)
})

saga.run(rootSaga)

function* rootSaga(){

}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
type DispatchFunction = () => AppDispatch
export const useAppDispatch: DispatchFunction = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
