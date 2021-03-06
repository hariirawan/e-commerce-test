import Axios from "axios";
import {
  ACTION_SEARCH_PRODUCT,
  ACTION_GET_PRODUCT,
  ACTION_GET_DETAIL_PRODUCT,
  LIKE_BUTTON
} from "./action-type-list-product";

export const search_product = (dispatch, isSearch, value) => {
  let payload = {
    isSearch,
    value
  };
  return dispatch({ type: ACTION_SEARCH_PRODUCT, payload });
};

export const get_product = dispatch => {
  Axios.get("https://private-4639ce-ecommerce56.apiary-mock.com/home").then(
    res => {
      if (res.status === 200) {
        dispatch({ type: ACTION_GET_PRODUCT, payload: res.data[0].data });
      }
    }
  );
};

export const get_detail_product = (dispatch, id) => {
  return dispatch({ type: ACTION_GET_DETAIL_PRODUCT, id });
};

export const handle_like_button = dispatch => {
  return dispatch({ type: LIKE_BUTTON });
};
