import { ImageActionTypes } from '../redux/ducks/images';

export type FetchImageAction = {
  type: ImageActionTypes.FETCHED_IMAGES;
  payload: string;
};
