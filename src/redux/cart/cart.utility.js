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
