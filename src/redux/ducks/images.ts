import { call, put, takeEvery } from 'redux-saga/effects';

import { getImages } from '../../api';
import { IImageData } from '../../interfaces/IImageData';
import { ImageAction } from '../../types/imageAction';
import { ImageState } from '../../types/imageState';

//#region Action types
export enum ImageActionTypes {
  REQUEST_IMAGES = 'app/images/request',
  REQUEST_IMAGES_FULFILLED = 'app/images/fulfilled',
  FETCHED_IMAGES = 'saga/images/fetched',
}
//#endregion
//#region State
const initialState: ImageState = {
  data: {
    hits: [],
    total: 0, // how many images in API
    totalHits: 0, // and how many API returned
  },
  loading: false,
};
//#endregion
//#region Reducer
export default function imagesReducer(
  state = initialState,
  action: ImageAction
) {
  switch (action.type) {
    case ImageActionTypes.REQUEST_IMAGES:
      state = { ...state, loading: true };
      return state;
    case ImageActionTypes.REQUEST_IMAGES_FULFILLED:
      state = {
        ...state,
        data: {
          hits: action.payload!.hits,
          total: action.payload!.total,
          totalHits: action.payload!.totalHits,
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
export const requestImages = () => ({ type: ImageActionTypes.REQUEST_IMAGES });
export const requestImagesFulfilled = (imageData: IImageData) => ({
  type: ImageActionTypes.REQUEST_IMAGES_FULFILLED,
  payload: imageData,
});
export const fetchImages = (tags: string) => ({
  type: ImageActionTypes.FETCHED_IMAGES,
  payload: tags,
});
//#endregion
//#region Sagas
export function* fetchImagesAsync(action: {
  type: ImageActionTypes;
  payload: string;
}) {
  try {
    yield put(requestImages());

    const data = yield call(getImages, action.payload);
    yield put(requestImagesFulfilled(data));
  } catch (reason) {
    console.error('Saga request failed: ', reason);
  }
}

export function* watchFetchImages() {
  yield takeEvery(ImageActionTypes.FETCHED_IMAGES, fetchImagesAsync);
}
//#endregion
