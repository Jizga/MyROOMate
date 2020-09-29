import React from "react";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Buddies from './Components/Buddies'
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Buddies />
      <Footer />
    </div>
  );
}

export default App;
