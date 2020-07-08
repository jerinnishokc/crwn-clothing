import React from 'react';
// import './collection.styles.scss';
import { selectCollectionItems } from '../../redux/shop/shop.selector';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';
import {
  CollectionPageContainer,
  TitleContainer,
  ItemsContainer,
} from './collection.styles';

const CollectionPage = ({ collectionItem }) => {
  console.log("Collection Page is rendered");
  const { title, items } = collectionItem;

  return (
    <CollectionPageContainer>
      <TitleContainer>{title}</TitleContainer>
      <ItemsContainer>
        {items.map((item) => (
          <CollectionItem
            className="collection-item"
            key={item.id}
            item={item}
          />
        ))}
      </ItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    collectionItem: selectCollectionItems(ownProps.match.params.collectionId)(
      state
    ),
  };
};

export default connect(mapStateToProps)(CollectionPage);
