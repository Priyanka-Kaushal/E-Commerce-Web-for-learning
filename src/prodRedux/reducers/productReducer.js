import { SET_PRODUCTS } from './productActions';

const initialState = [];

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.payload;

    default:
      return state;
  }
};

export default productReducer;