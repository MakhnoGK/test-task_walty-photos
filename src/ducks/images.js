export const GET_IMAGE_DATA = 'app/images/get';
export const GET_IMAGE_DATA_ASYNC = 'app/images/getAsync';

export const onGetImagesAsync = (term) => ({
  type: GET_IMAGE_DATA,
  payload: term,
});

const initialState = {
  images: [],
  total: 0,
  totalHits: 0,
  loading: false,
};

export default function imagesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_IMAGE_DATA_ASYNC:
      state = { ...state, images: action.payload.hits };
      // console.log(action.payload.hits);
      return state;
    default:
      return state;
  }
}
