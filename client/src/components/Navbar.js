import React from "react";

const Navbar = () => (
  <div className="navbar-fixed">
    <nav className="site-navbar blue darken-4">
      <div className="nav-wrapper">
        <a href="/" className="brand-logo"><i className="material-icons left">library_books</i> NYT Scraper React App</a>
        <ul className="right">
          <li><a href="/"><i className="material-icons left tiny">home</i> Home</a></li>
          <li><a href="/saved"><i className="material-icons left tiny">save</i> Saved Articles</a></li>
        </ul>
      </div>
    </nav>
  </div>
);
export default Navbar;