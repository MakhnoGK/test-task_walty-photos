import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import imagesReducer from './ducks/images';

import { watchGetImageDataAsync } from './sagas/imagesSaga';


const sagaMiddleware = createSagaMiddleware();
const appStore = createStore(imagesReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchGetImageDataAsync);

export default appStore;
