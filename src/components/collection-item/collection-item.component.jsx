import React from 'react';
// import './collection-item.styles.scss';
//import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart.actions';
import {
  CollectionItemContainer,
  ImageContainer,
  AddCustomButton,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer,
} from './collection-item.styles';

const CollectionItem = ({ item, addItemToCart }) => {
  const { name, imageUrl, price } = item;
  return (
    <CollectionItemContainer>
      <ImageContainer className="image" imageUrl={imageUrl}></ImageContainer>
      <AddCustomButton
        className="custom-button"
        onClick={() => addItemToCart(item)}
        inverted
      >
        ADD TO CART
      </AddCustomButton>
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>${price}</PriceContainer>
      </CollectionFooterContainer>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
