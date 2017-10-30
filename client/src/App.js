import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Search from "./components/Search";
import Searched from "./components/Searched";
import Saved from "./components/Saved";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Main>
            <Route exact path="/" component={Search} />
            <Route exact path="/Saved" component={Saved} />
          </Main>
        </div>
      </Router>
    );
  }
}

export default App;