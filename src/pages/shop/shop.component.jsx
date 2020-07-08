import React from "react";
import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import { Route } from "react-router-dom";
import CollectionPageContainer from "../collection/collection.container";
import { ShopPageContainer } from "./shop.styles";
import { connect } from "react-redux";
import {fetchCollectionsStartAsync} from '../../redux/shop/shop.actions';

class Shop extends React.Component {
  constructor() {
    super();
    console.log("I am Shop Page constructor!!!");
  }

  componentDidMount() {
    console.log('Shop Page componentDidMount is fired!!!');
    const {fetchCollectionsStartAsync} = this.props;

    fetchCollectionsStartAsync();
  }

  render() {
    console.log("Shop Page Render function!!!");
    const { match } = this.props;

    return (
      <ShopPageContainer>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionOverviewContainer {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageContainer {...props} />
          )}
        />
      </ShopPageContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(
  null,
  mapDispatchToProps
)(Shop);
