import { cartTypes } from './cart.types';

export const toggleCartDropdown = () => ({
  type: cartTypes.TOGGLE_CART_DROPDOWN,
});

export const addItemToCart = (item) => ({
  type: cartTypes.ADD_ITEM_TO_CART,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: cartTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const removeItemFromCart = (item) => ({
  type: cartTypes.REMOVE_ITEM_FROM_CART,
  payload: item,
});
