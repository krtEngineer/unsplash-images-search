import { useState } from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { setSearchTxt } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.elements.search.value;
    if (!inputValue) {
      return;
    }
    setSearchTxt(inputValue);
  };
  return (
    <section className="search" onSubmit={handleSubmit}>
      <h1 className="title">unsplash images</h1>
      <form className="search-form">
        <input
          className="form-input search-input"
          name="search"
          type="text"
          placeholder="India"
        />
        <button type="submit" className="submit-btn">
          search
        </button>
      </form>
    </section>
  );
};
export default SearchForm;
