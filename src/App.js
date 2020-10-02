import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Home from "./Views/Home/Home";
import Buddies from "./Views/Buddies/Buddies";
import GrayRoom from "./Views/GrayRoom/GrayRoom";
import BlueRoom from "./Views/BlueRoom/BlueRoom";
import Profile from "./Views/Profile/Profile";
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
