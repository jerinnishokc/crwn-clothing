import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItems from '../cart-items/cart-items.component';
import { connect } from 'react-redux';
import { selectedCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';
import { withRouter } from 'react-router-dom';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  console.log('Cart Dropdown rendered');
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItems key={item.id} item={item} />)
        ) : (
          <div className="empty-message">No items in cart</div>
        )}
      </div>
      <CustomButton
        type="button"
        onClick={() => {
          history.push('/checkout');
          //toggleCartDropdown();
          dispatch(toggleCartDropdown());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectedCartItems,
});

// const mapDispatchToProps = (dispatch) => ({
//   toggleCartDropdown: () => dispatch(toggleCartDropdown()),
// });

export default connect(
  mapStateToProps
  //mapDispatchToProps
)(withRouter(CartDropdown));
