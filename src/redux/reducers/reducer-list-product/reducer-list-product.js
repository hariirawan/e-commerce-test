import {
  ACTION_SEARCH_PRODUCT,
  ACTION_GET_PRODUCT
} from "../../actions/action-list-product/action-type-list-product";

const initialState = {
  isSearch: false,
  data: [],
  category: [],
  productPromo: []
};
const reducerListProduct = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_SEARCH_PRODUCT:
      return { ...state, ...action.payload };

    case ACTION_GET_PRODUCT:
      return {
        ...state,
        category: action.payload.category,
        productPromo: action.payload.productPromo
      };
    default:
      return state;
  }
};

export default reducerListProduct;
