import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SideBar from "./components/SideBar/SideBar";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="left">
        <SideBar />
      </div>
      <div className="right"></div>
      <Footer />
    </div>
  );
}

export default App;
