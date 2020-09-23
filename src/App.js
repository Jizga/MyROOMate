import React from "react";
import logo from "./assets/icons/logoMyROOMate.png";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </nav>
      <Footer />
    </div>
  );
}

export default App;
