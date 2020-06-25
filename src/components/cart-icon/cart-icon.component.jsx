import React from 'react';
import { ReactComponent as Cart } from '../../assets/cart.svg';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

class CartIcon extends React.Component {
  render() {
    console.log('Cart-icon rendered!!!');
    return (
      <div
        className="cart-icon"
        onClick={() => this.props.toggleCartDropdown()}
      >
        <Cart className="shopping-icon" />
        <div className="item-count">{this.props.totalItems}</div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown()),
});

const mapStateToProps = (state) => {
  console.log('-----------------------------------------------------');
  console.log('Cart-icon called!!!');
  console.log('----------------------OVER-------------------------------');
  return {
    totalItems: selectCartItemsCount(state),
    //totalItems: state.cart.totalItems,
    // totalItems: state.cart.cartItems.reduce(
    //   (accumulatedQuantity, cartItems) =>
    //     accumulatedQuantity + cartItems.quantity,
    //   0
    // ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
