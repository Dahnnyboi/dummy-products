import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/global/Navbar';

import Home from './pages/Home';
import Products from './pages/Products'
import Footer from './components/global/Footer';

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
      <Navbar />

      <Switch>
        <ProductsRoute exact path="/">
          <Home />
        </ProductsRoute>
        <ProductsRoute path="/products">
          <Products />
        </ProductsRoute>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
