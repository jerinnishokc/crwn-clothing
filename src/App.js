import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch, Redirect } from "react-router-dom";
import Shop from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUp from "./pages/signIn-signUp/signIn-signUp.component";
import {
  auth,
  createUserProfileDocument
  //addCollectionAndDocuments,
} from "./firebase/firebase.util";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { getCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import Checkout from "./pages/checkout/checkout.component";
// import { selectCollectionsForPreview } from './redux/shop/shop.selector';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    //const { setCurrentUser, collectionsArray } = this.props;
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        console.log("App-", userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
          console.log("snapshot-", snapShot);
        });
      } else {
        setCurrentUser(userAuth);
      }
      // addCollectionAndDocuments(
      //   'collections',
      //   collectionsArray.map(({ title, items }) => ({ title, items }))
      // );
      //test comment
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/checkout" component={Checkout} />
          {/*<Route
             exact
             path="/signIn"
             render={() =>
               this.props.currentUser ? <Redirect to="/" /> : <SignInSignUp />
             }
            />*/}
          <Route exact path="/signIn">
            {this.props.currentUser ? <Redirect to="/" /> : <SignInSignUp />}
          </Route>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

const mapStateToProps = createStructuredSelector({
  currentUser: getCurrentUser
  //collectionsArray: selectCollectionsForPreview,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
