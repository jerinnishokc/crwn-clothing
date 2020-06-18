import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUp from './pages/signIn-signUp/signIn-signUp.component';

// const HatsApp = (props) => {
//   return (
//     <div>
//       <h1>Hats Page</h1>
//     </div>
//   );
// };

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/signIn" component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
