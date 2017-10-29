import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Search from "./components/Search";
import Searched from "./components/Searched";
import Saved from "./components/Saved";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Main>
          <Search />
          <Searched />
          <Saved />
        </Main>
      </div>
    );
  }
}

export default App;
