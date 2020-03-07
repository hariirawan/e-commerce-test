import {
  ACTION_SEARCH_PRODUCT,
  ACTION_GET_PRODUCT,
  ACTION_GET_DETAIL_PRODUCT
} from "../../actions/action-list-product/action-type-list-product";

const initialState = {
  isSearch: false,
  data: [],
  category: [],
  productPromo: [],
  detailProduct: {
    imageUrl: ""
  }
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

    case ACTION_GET_DETAIL_PRODUCT:
      let detail = state.productPromo.filter(value => value.id === action.id);

      return {
        ...state,
        detailProduct: { ...state.detailProduct, ...detail[0] }
      };

    default:
      return state;
  }
};

export default reducerListProduct;
