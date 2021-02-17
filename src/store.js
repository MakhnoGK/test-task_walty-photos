import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import imagesReducer from './ducks/images';

import watchFetchImages from './sagas/imagesSaga';


const sagaMiddleware = createSagaMiddleware();
const appStore = createStore(imagesReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchFetchImages);

export default appStore;
