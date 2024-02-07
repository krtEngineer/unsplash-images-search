import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
// import Photo from "./Photo";
import ThemeToggle from "./ThemeToggle";
import SearchForm from "./SearchForm";
import Gallery from "./Gallery";
// const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  return (
    <div className="app-container">
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </div>
  );
}

export default App;
