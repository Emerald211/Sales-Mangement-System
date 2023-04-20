import { ORDERS_ACTION_TYPES } from "./orders.type";

const INITIAL_STATE = {
  orders: [],
};
export const filteredState = (orderToDelete) =>
  INITIAL_STATE.orders.filter((eachitem) => orderToDelete.id != eachitem.id);

export const ordersReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case ORDERS_ACTION_TYPES.SET_CURRENT_ORDERS:
      return { ...state, orders: payload };
    default:
      return state;
  }
};
