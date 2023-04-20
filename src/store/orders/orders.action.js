import { createAction } from "../../utils/reducers/reducer";
import { ORDERS_ACTION_TYPES } from "./orders.type";

export const setOrders = (orders) =>
  createAction(ORDERS_ACTION_TYPES.SET_CURRENT_ORDERS, orders);

export const deleteOrders = (orders) => createAction(ORDERS_ACTION_TYPES.DELETE_ORDERS, orders);

const deleteFromCartFunction = (cartItem, productToDelete) => {
  return cartItem.filter((eachCartItem) => {
    return eachCartItem.id !== productToDelete.id;
  });
};

export const deleteFromCart = (cartItem, productToDelete) => {
  const newCartItems = deleteFromCartFunction(cartItem, productToDelete);

  return createAction(ORDERS_ACTION_TYPES.SET_CURRENT_ORDERS, newCartItems);
};

const approveItemsFromCartFunction = (cartItem, productToDelete) => {
  const mainCartList = cartItem.filter((eachCartItem) => {
    return eachCartItem.id !== productToDelete.id;
  });

  const filteredCartList = cartItem.filter((eachCartItem) => {
    return eachCartItem.id === productToDelete.id;
  });

  const filterCartObject = filteredCartList[0];

  const newFilterCartObject = { ...filterCartObject, approved: true }


  mainCartList.push(newFilterCartObject)
  

  return mainCartList
};

export const approveItemFromCart = (cartItem, productToApprove) => {
  const newCartItems = approveItemsFromCartFunction(cartItem, productToApprove);

  // console.log(productToApprove);

  return createAction(ORDERS_ACTION_TYPES.SET_CURRENT_ORDERS, newCartItems )
}