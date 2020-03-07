import { BUY_PRODUCT } from "../../actions/action-purchase-history/action-type-purchase-history";

const initialState = {
  isSearch: false,
  data: []
};
const reducerPurchaseHistory = (state = initialState, action) => {
  switch (action.type) {
    case BUY_PRODUCT:
      return { ...state, data: [...state.data, action.payload] };

    default:
      return state;
  }
};

export default reducerPurchaseHistory;
