import { takeEvery, put, call } from 'redux-saga/effects';
import { GET_IMAGE_DATA, GET_IMAGE_DATA_ASYNC } from '../ducks/images';

const API_KEY = '20295782-d190a9f4db1bc0031bd7c6307';

function getData(tags) {
  const term = tags.map((tag) => tag.replaceAll(/\W+/g, '')).join('+');

  return fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${term}`)
    .then((response) => response.json())
    .then((data) => data);
}

function* getImageDataAsync(action) {
  const imageData = yield call(getData, action.payload);

  yield put({ type: GET_IMAGE_DATA_ASYNC, payload: imageData });
}

export function* watchGetImageDataAsync() {
  yield takeEvery(GET_IMAGE_DATA, getImageDataAsync);
}
