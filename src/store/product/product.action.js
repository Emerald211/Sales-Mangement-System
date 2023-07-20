import { PRODUCT_TYPES } from './product.types'
import { createAction } from '../../utils/reducers/reducer';

export const setProduct = (product) => createAction(PRODUCT_TYPES.SET_PRODUCT, product);

export const updateProducts = (proDucts, productToAdd) => {
    const newProductItems = proDucts.push(productToAdd);
  
    return createAction(ORDERS_ACTION_TYPES.SET_CURRENT_ORDERS, newProductItems)
  }