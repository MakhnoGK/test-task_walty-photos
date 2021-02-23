import { call, put } from 'redux-saga/effects';

import { getImages } from '../api';
import { fetchImagesAsync, ImageActionTypes } from '../redux/ducks/images';

describe.only('Image saga', () => {
  it('should return correct actions', () => {
    const saga = fetchImagesAsync({
      type: ImageActionTypes.FETCHED_IMAGES,
      payload: '',
    });

    expect(saga.next().value).toEqual(
      put({ type: ImageActionTypes.REQUEST_IMAGES })
    );
    expect(saga.next().value).toEqual(call(getImages, ''));
  });
});
