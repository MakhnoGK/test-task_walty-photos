import { call, put, takeEvery } from 'redux-saga/effects';

const API_KEY = '20295782-d190a9f4db1bc0031bd7c6307';

//#region Action types
export const REQUEST_IMAGES = 'app/images/request';
export const REQUEST_IMAGES_FULFILLED = 'app/images/fulfilled';
export const FETCHED_IMAGES = 'saga/images/fetched';
//#endregion
//#region State
const initialState = {
  data: {
    images: [],
    total: 0, // how many images in API
    totalHits: 0, // and how many API returned
  },
  loading: false,
};
//#endregion
//#region Reducer
export default function imagesReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_IMAGES:
      state = { ...state, loading: true };
      return state;
    case REQUEST_IMAGES_FULFILLED:
      state = {
        ...state,
        data: {
          images: action.payload.hits,
          total: action.payload.total,
          totalHits: action.payload.totalHits,
        },
        loading: false,
      };

      return state;
    default:
      return state;
  }
}
//#endregion
//#region Action creators
export const requestImages = () => ({ type: REQUEST_IMAGES });
export const requestImagesFulfilled = (imageData) => ({
  type: REQUEST_IMAGES_FULFILLED,
  payload: imageData,
});
export const fetchImages = (tags) => ({ type: FETCHED_IMAGES, payload: tags });
//#endregion
//#region Sagas
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

export function* watchFetchImages() {
  yield takeEvery(FETCHED_IMAGES, fetchImagesAsync);
}
//#endregion
