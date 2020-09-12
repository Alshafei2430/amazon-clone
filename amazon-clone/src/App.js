import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51HPvYWFaga2M2G5aHesJLt9tjyP2ZKOrQnOZddC9WdDf2zrPUPA0ETa1M8FLkiJXx1srrqiFNYnocIwW3eJILtML006hwHw9aq"
);

function App() {
  const [{ user }, dispatch] = useStateValue();

  // useEffect <<<<< POWERFULL
  // pIECE OF CODE WHICH RUNS BASED ON A GIVEN CONDITION

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user logged in ..
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      // Any cleanup operation go in here
      unsubscribe();
    };
  }, [dispatch]);

  console.log("user is this", user);

  return (
    <Router>
      <div className="app">
        <Header />

        <Switch>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
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
