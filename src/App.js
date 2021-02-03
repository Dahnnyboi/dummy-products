import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/global/Navbar';

import Home from './pages/Home';
import Products from './pages/Products'
import Product from './pages/Product'
import Footer from './components/global/Footer';
import Bought from './pages/Bought';
import NotFound from './pages/NotFound'
import ProductsNotFound from './pages/ProductsNotFound'

function ProductsRoute({ children, ...rest}) {
  return(
    <Route {...rest}>
      { children }
    </Route>
  )
}

function App() {
  return (
    <Router>
      <div className="shell">
        <div className="content">
        <Navbar />

        <Switch>
          <ProductsRoute exact path="/">
            <Home />
          </ProductsRoute>
          <ProductsRoute exact path="/products">
            <Products />
          </ProductsRoute>
          <ProductsRoute path="/products/:id">
            <Product />
          </ProductsRoute>
          <ProductsRoute path="/product_not_found">
            <ProductsNotFound />
          </ProductsRoute>
          <ProductsRoute path="/bought">
            <Bought />
          </ProductsRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>

        <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
