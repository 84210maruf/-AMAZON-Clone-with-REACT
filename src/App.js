// Elements & loaadSripe is for payment Proccess
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Checkout from "./Checkout";
import { auth } from "./firebase";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Orders from "./Orders";
import Payment from "./Payment";
import { useStateValue } from "./StateProvider";


const promise = loadStripe(
  //This API keys from stripe.com
  //https://dashboard.stripe.com/test/apikeys
  //user:marufulislamjames@gmail.com
  //pass:84210maruf
  "pk_test_51JY2aCIoLD5rwfnZKDWdMVM83AVgsJECcXYKIBnt9BR4VdplCBeNBB8ETMlIe5yhCn6cGrVM6HqWp4nJcubT8SkN00pVdmkC6X"
);

function App() {
  const [state, dispatch] = useStateValue();

  console.log("state.user & state.basket IS NOW :", state);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THIS USER IS >>> ", authUser);
      if (authUser) {
        //user Loged In
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //User Loged Out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
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

          <Route path="/orders">
            <Orders />
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
