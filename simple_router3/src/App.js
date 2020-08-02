import React from "react";
import "./App.css";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./home";
import Stuff from "./stuff";
import Contact from "./contact";

function App() {
  return (
    <HashRouter>
      <div className="header">
        <h1>Simple Spa</h1>
        <ul className="header">
          <li>
            <NavLink exact to="/">Home</NavLink>
          </li>
          <li>
          <NavLink to="/stuff">Stuff</NavLink>
          </li>
          <li>
          <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/stuff" component={Stuff} />
          <Route path="/contact" component={Contact} />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
