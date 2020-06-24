import { cartTypes } from './cart.types';
import { addItemToCartUtility } from './cart.utility';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
  totalItems: 0,
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartTypes.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartTypes.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addItemToCartUtility(state.cartItems, action.payload),
        totalItems: state.totalItems + 1,
      };
    default:
      return state;
  }
};

export default CartReducer;
