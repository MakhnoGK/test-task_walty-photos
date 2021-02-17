import { combineReducers, createStore } from 'redux';
import imagesReducer from './ducks/images';

const rootReducer = combineReducers({
  imagesReducer
});

const appStore = createStore(rootReducer);

export default appStore;
