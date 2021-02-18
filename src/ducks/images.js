export const REQUEST_IMAGES = 'app/images/request';
export const REQUEST_IMAGES_FULFILLED = 'app/images/fulfilled';
export const FETCHED_IMAGES = 'saga/images/fetched';

export const requestImages = () => ({ type: REQUEST_IMAGES });
export const requestImagesFulfilled = (imageData) => ({
  type: REQUEST_IMAGES_FULFILLED,
  payload: imageData,
});
export const fetchImages = (term) => ({ type: FETCHED_IMAGES, payload: term });

const initialState = {
  data: {
    images: [],
    total: 0, // how many images in API
    totalHits: 0, // and how many API returned
  },
  loading: false,
};

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
