import { configureStore } from '@reduxjs/toolkit'
import mainReducer from './state/mainSlice'
import createSagaMiddleware from 'redux-saga';
import { watchUnsplash } from './state/saga';

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    main: mainReducer,
  },
  middleware: [sagaMiddleware],
})

sagaMiddleware.run(watchUnsplash);