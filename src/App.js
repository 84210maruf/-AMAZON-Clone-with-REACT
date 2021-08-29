import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Checkout from './Checkout';
import { auth } from './firebase';
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Payment from "./Payment";
import { useStateValue } from './StateProvider';


const promise = loadStripe(
  "pk_test_51JTXI2SGttojYn309AxNVG3KL2Tz0LAbrShpRUtCWSANxRK3mMsgly1Xz1UfpcJ0WiMtXgFGi2EZfenV6MB14CQ700BLilkexw"
  )

function App() {

  const [state, dispatch] = useStateValue();

  console.log('state.user & state.basket IS NOW :',state);

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
          <Route path="/payment">
              <Header />
              <Elements stripe={promise}>
              <Payment />
              </Elements>
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
