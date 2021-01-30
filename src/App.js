import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/global/Navbar';
import Shell from './components/global/Shell';

import Home from './pages/Home';
import Products from './pages/Products'

function ProductsRoute({ children, ...rest}) {
  return(
    <Route {...rest}>
      <Shell>
        { children }
      </Shell>
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
    </Router>
  );
}

export default App;
