import { MOVE_ORDER_TO_FARM } from '../actions/marketTypes';
import { MOVE_ORDER_TO_CUSTOMER } from '../actions/farmTypes';

const initialState = {
  orders: [],
};

const farm = (state = initialState, action) => {
  switch (action.type) {
    case MOVE_ORDER_TO_FARM:
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };

    case MOVE_ORDER_TO_CUSTOMER:
      const ordersLength = state.orders.length;
      return {
        ...state,
        orders: [...state.orders.slice(0, ordersLength - 1)],
      }

    default:
      return state;
  }
};

export default farm;
