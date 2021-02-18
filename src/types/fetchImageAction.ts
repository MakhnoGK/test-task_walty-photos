import { ImageActionTypes } from "../ducks/images";

export type FetchImageAction = {
  type: ImageActionTypes.FETCHED_IMAGES,
  payload: string;
}