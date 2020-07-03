import React from 'react';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import { ShopPageContainer } from './shop.styles';

const Shop = ({ match }) => {
  //console.log(match.path);
  return (
    <ShopPageContainer>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </ShopPageContainer>
  );
};

export default Shop;
