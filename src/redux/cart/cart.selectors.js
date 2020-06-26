import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectedCartItems = createSelector([selectCart], (cart) =>
  cart.cartItems.map((x) => x)
);

export const selectCartItemsCount = createSelector(
  [selectedCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItems) =>
        accumulatedQuantity + cartItems.quantity,
      0
    )
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);
