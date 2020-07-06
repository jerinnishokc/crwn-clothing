import React from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import { ShopPageContainer } from "./shop.styles";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.util";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class Shop extends React.Component {
  state = {
    isLoading: true
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async snapshot => {
      //console.log(snapshot);
      const { updateCollections } = this.props;
      const collections = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collections);
      this.setState({ isLoading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;

    return (
      <ShopPageContainer>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={isLoading} {...props} />
          )}
        />
      </ShopPageContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collections => dispatch(updateCollections(collections))
});

export default connect(
  null,
  mapDispatchToProps
)(Shop);
