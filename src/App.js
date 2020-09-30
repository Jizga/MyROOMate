import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Buddies from "./Components/Buddies";
import GrayRoom from "./Components/GrayRoom";
import BlueRoom from "./Components/BlueRoom";
import Profile from "./Components/Profile";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/buddies">
            <Buddies />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/GrayRoom">
            <GrayRoom />
          </Route>
          <Route path="/BlueRoom">
            <BlueRoom />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
