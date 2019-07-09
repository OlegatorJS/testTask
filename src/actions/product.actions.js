import * as types from '../constants/product.types';
import data from '../product_lists.json';

export const getAllProducts = () => {
  return async dispatch => {
    dispatch({
      type: types.GET_PRODUCTS,
      payload: data.results[0].hits
    });
  };
};

export const getSingleProduct = id => {
  return async dispatch => {
    dispatch({
      type: types.GET_SINGLE_PRODUCT,
      payload: getProduct(data, id)
    });
  };
};

const getProduct = (data, id) => {
  return data.results[0].hits.filter(prod => prod.post_id == id);
};
