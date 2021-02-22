import imagesReducer, {
  requestImages,
  requestImagesFulfilled,
} from '../redux/ducks/images';
import { ImageState } from '../types/imageState';

describe('Image reducer', () => {
  const initialState: ImageState = {
    data: {
      hits: [],
      total: 0, // how many images in API
      totalHits: 0, // and how many API returned
    },
    loading: false,
  };

  it('should handle REQUEST_IMAGES', () => {
    expect(imagesReducer(initialState, requestImages())).toHaveProperty(
      'loading',
      true
    );
  });

  it('should handle REQUEST_IMAGES_FULFILLED', () => {
    const testReducer = imagesReducer(
      initialState,
      requestImagesFulfilled({ hits: [], total: 0, totalHits: 1 })
    );

    expect(testReducer).toHaveProperty('data.hits.length', 0);
    expect(testReducer).toHaveProperty('data.total', 0);
    expect(testReducer).toHaveProperty('data.totalHits', 1);
    expect(testReducer).toHaveProperty('loading', false);
  });
});
