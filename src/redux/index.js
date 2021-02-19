import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import imagesReducer, { watchFetchImages } from './ducks/images';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  imagesReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchFetchImages);

export default store;
