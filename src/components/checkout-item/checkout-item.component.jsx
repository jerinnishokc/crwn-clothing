import React from 'react';
import './checkout-item.styles.scss';
import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
} from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

const CheckoutItem = ({
  checkoutItem,
  removeItemFromCart,
  addItemToCart,
  clearItemFromCart,
}) => {
  const { name, quantity, imageUrl, price } = checkoutItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span
          className="arrow"
          onClick={() => removeItemFromCart(checkoutItem)}
        >
          &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={() => addItemToCart(checkoutItem)}>
          &#10095;
        </span>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => clearItemFromCart(checkoutItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
  addItemToCart: (item) => dispatch(addItemToCart(item)),
  removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
