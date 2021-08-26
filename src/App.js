import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Checkout from './Checkout';
import { auth } from './firebase';
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import { useStateValue } from './StateProvider';

function App() {

  const [state, dispatch] = useStateValue();

  console.log('state.user & state.basket & state.name IS NOW :',state);

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log('THIS USER IS >>> ',authUser);
      if(authUser) {
        //user Loged In
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      }else {
        //User Loged Out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>


          <Route path="/login">
              <Login />
          </Route>

          <Route path="/checkout">
              <Header />
              <Checkout />
          </Route>

          <Route path="/">
              <Header />
              <Home />
          </Route>
          
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
