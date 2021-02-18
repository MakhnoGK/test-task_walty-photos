import { takeEvery, put, call } from 'redux-saga/effects';
import {
  FETCHED_IMAGES,
  requestImages,
  requestImagesFulfilled,
} from '../ducks/images';

const API_KEY = '20295782-d190a9f4db1bc0031bd7c6307';

function getData(term) {
  return fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${term}`)
    .then((response) => response.json())
    .then((data) => data);
}

function* fetchImagesAsync(action) {
  try {
    yield put(requestImages());

    const data = yield call(getData, action.payload);
    yield put(requestImagesFulfilled(data));
  } catch (reason) {
    console.error('Saga request failed: ', reason);
  }
}

export default function* watchFetchImages() {
  yield takeEvery(FETCHED_IMAGES, fetchImagesAsync);
}
