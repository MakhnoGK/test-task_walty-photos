import {
  ImageActionTypes,
  requestImages,
  requestImagesFulfilled,
} from '../redux/ducks/images';
import { ImageAction } from '../types/imageAction';

describe('Image action tests', () => {
  it('should create REQUEST_IMAGE', () => {
    const expectedAction: ImageAction = {
      type: ImageActionTypes.REQUEST_IMAGES,
      payload: undefined,
    };

    expect(requestImages()).toEqual(expectedAction);
  });

  it('should create REQUEST_IMAGE_FULFILLED', () => {
    const testedCreator = requestImagesFulfilled({
      hits: [
        {
          tags: 'tag, tag 2',
          type: 'image type',
          webformatURL: 'url',
          id: 123,
        },
      ],
      total: 1,
      totalHits: 1,
    });

    expect(testedCreator.type).toEqual(
      ImageActionTypes.REQUEST_IMAGES_FULFILLED
    );
    expect(testedCreator.payload.hits).toHaveLength(1);
  });
});
