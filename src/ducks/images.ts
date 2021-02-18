import { IImageData } from '../interfaces/IImageData';
import { ImageAction } from '../types/imageAction';
import { ImageState } from '../types/imageState';

export enum ImageActionTypes {
  REQUEST_IMAGES = 'app/images/request',
  REQUEST_IMAGES_FULFILLED = 'app/images/fulfilled',
  FETCHED_IMAGES = 'saga/images/fetched',
}

export const requestImages = () => ({ type: ImageActionTypes.REQUEST_IMAGES });
export const requestImagesFulfilled = (imageData: IImageData) => ({
  type: ImageActionTypes.REQUEST_IMAGES_FULFILLED,
  payload: imageData,
});
export const fetchImages = (tags: string) => ({
  type: ImageActionTypes.FETCHED_IMAGES,
  payload: tags,
});

const initialState: ImageState = {
  data: {
    hits: [],
    total: 0,
    totalHits: 0,
  },
  loading: false,
};

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
          hits: action.payload.hits,
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
