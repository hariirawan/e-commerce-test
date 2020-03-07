import { BUY_PRODUCT } from "./action-type-purchase-history";

export const buyProduct = (dispatch, data) => {
  return dispatch({ type: BUY_PRODUCT, payload: data });
};
