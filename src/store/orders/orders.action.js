import { createAction } from "../../utils/reducers/reducer";
import { ORDERS_ACTION_TYPES } from "./orders.type";

export const setOrders = (orders) =>
  createAction(ORDERS_ACTION_TYPES.SET_CURRENT_ORDERS, orders);

export const deleteOrder = (orders, orderToDelete) => {
  const newOrders = orders.filter((order) => order.id !== orderToDelete.id);
  return createAction(ORDERS_ACTION_TYPES.SET_CURRENT_ORDERS, newOrders);
};

const approveOrderFunction = (orders, orderToApprove) => {
  const mainOrderList = orders.filter((order) => order.id !== orderToApprove.id);
  const filteredOrderList = orders.filter((order) => order.id === orderToApprove.id);
  const filterOrderObject = filteredOrderList[0];
  const newFilterOrderObject = { ...filterOrderObject, approved: true };
  mainOrderList.push(newFilterOrderObject);
  return mainOrderList;
};

export const approveOrder = (orders, orderToApprove) => {
  const newOrders = approveOrderFunction(orders, orderToApprove);
  return createAction(ORDERS_ACTION_TYPES.SET_CURRENT_ORDERS, newOrders);
};

export const updateOrders = (orders, orderToAdd) => {
  const newOrders = orders.push(orderToAdd)
  return createAction(ORDERS_ACTION_TYPES.SET_CURRENT_ORDERS, newOrders);
};
