import s from "./searchbar.module.css";
import { useState } from "react";

export default function SearchBar({ submitForm }) {
  const [searchQuery, setSearchQuery] = useState("");
  const handleChange = (e) => {
    const { value } = e.currentTarget;
    setSearchQuery(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(searchQuery);
    setSearchQuery("");
  };
  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          placeholder="enter your search query"
          onChange={handleChange}
          value={searchQuery}
        />
      </form>
    </>
  );
}
