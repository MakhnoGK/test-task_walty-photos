import { ImageActionTypes } from '../redux/ducks/images';
import { IImageData } from '../interfaces/IImageData';

export type ImageAction = {
  type: ImageActionTypes;
  payload?: IImageData;
};
