import { createSelector } from "reselect";

export const selectOrders = (state) => state.orders.orders;

export const selectTotalRevenue = createSelector([selectOrders], (orders) =>
  orders.reduce((total, eachitem) => total + eachitem.price, 0)
);

export const selectTotalOrders = createSelector([selectOrders], (orders) => orders.length)
