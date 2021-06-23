
import React from 'react';
import {BrowserRouter as Router,Link, Route,Switch} from 'react-router-dom'
import Cart from './components/Cart';
import Header from './components/Header';
import Product from './components/Product';
import Checkout from './components/Checkout'

function App() {
  return (
     <Router>
        <div className="container">
            <Header />
            <Switch>
               <Route path="/" exact component={Product} />
               <Route path="/carts" exact component={Cart} />
               <Route path="/checkout" exact component={Checkout}/>
            </Switch>
        </div>
     </Router>
  );
}

export default App;
