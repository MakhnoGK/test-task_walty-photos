import imagesReducer, {
  ImageActionTypes,
  requestImages,
  requestImagesFulfilled,
} from '../../ducks/images';
import { ImageState } from '../../types/imageState';

const initialState: ImageState = {
  data: {
    hits: [],
    total: 0,
    totalHits: 0,
  },
  loading: false,
};

describe('images reducer', () => {
  it('should return initial state', () => {
    expect(imagesReducer(undefined, null)).toEqual(initialState);
  });

  it('should handle REQUEST_IMAGES', () => {
    expect(imagesReducer(initialState, requestImages())).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should handle REQUEST_IMAGES_FULFILLED', () => {
    const expectedState = {
      data: {
        hits: [{ id: 0, tags: 'tags', type: 'type', webformatURL: 'url' }],
        total: 1,
        totalHits: 2,
      },
      loading: false,
    };

    expect(
      imagesReducer(
        initialState,
        requestImagesFulfilled({
          hits: [{ id: 0, tags: 'tags', type: 'type', webformatURL: 'url' }],
          total: 1,
          totalHits: 2,
        })
      )
    ).toEqual(expectedState);
  });
});
