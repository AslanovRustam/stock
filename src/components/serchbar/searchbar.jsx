import s from "./searchbar.module.css";
import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";

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
          placeholder="some text"
          onChange={handleChange}
          value={searchQuery}
        />
      </form>
      {/* <Suspense fallback={<div>...Loading from Searchbar</div>}>
        <Outlet />
      </Suspense> */}
    </>
  );
}
