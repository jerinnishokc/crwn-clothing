export const addItemToCartUtility = (cartItems, cartItemToAdd) => {
  const itemExists = cartItems.find((item) => item.id === cartItemToAdd.id);

  if (itemExists) {
    return cartItems.map((item) =>
      item.id === cartItemToAdd.id
        ? {
            ...item,
            price: item.price,
            quantity: item.quantity + 1,
          }
        : item
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToBeRemoved) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === cartItemToBeRemoved.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== cartItemToBeRemoved.id);
  }

  return cartItems.map((item) =>
    item.id === cartItemToBeRemoved.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
