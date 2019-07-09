import * as types from '../constants/product.types';

const initialState = {
  products: [],
  activeProduct: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.GET_PRODUCTS:
      return { ...state, products: [...action.payload] };
    case types.GET_SINGLE_PRODUCT:
      return { ...state, activeProduct: { ...action.payload[0] } };
    default:
      return state;
  }
}
