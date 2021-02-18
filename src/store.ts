import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import imagesReducer from './ducks/images';
import watchFetchImages from './sagas/imagesSaga';

const sagaMiddleware = createSagaMiddleware();
const appStore = createStore(
  imagesReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchFetchImages);

export default appStore;
