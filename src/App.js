import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Checkout from './Checkout';
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div className="app">
      <Header />
        <Switch>

          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="/">
            <Home />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
