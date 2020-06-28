import React from 'react';
import './collection.styles.scss';
import { selectCollectionItems } from '../../redux/shop/shop.selector';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({ collectionItem }) => {
  const { title, items } = collectionItem;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
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
