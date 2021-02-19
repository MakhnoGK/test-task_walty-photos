import { takeEvery, put, call } from 'redux-saga/effects';
import {
  requestImages,
  requestImagesFulfilled,
} from '../ducks/images';
import { ImageActionTypes } from '../ducks/images';
import { FetchImageAction } from '../types/fetchImageAction';

const API_KEY = '20295782-d190a9f4db1bc0031bd7c6307';

async function getData(term: string): Promise<ImageActionTypes> {
  const response = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${term}`);
  const data = await response.json();
  return data;
}

function* fetchImagesAsync(action: FetchImageAction) {
  try {
    yield put(requestImages());

    const data = yield call(getData, action.payload);
    yield put(requestImagesFulfilled(data));
  } catch (reason) {
    console.error('Saga request failed: ', reason);
  }
}

export default function* watchFetchImages() {
  yield takeEvery(ImageActionTypes.FETCHED_IMAGES, fetchImagesAsync);
}
