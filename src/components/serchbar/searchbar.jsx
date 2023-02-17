import s from "./searchbar.module.css";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function SearchBar() {
  return (
    <>
      <form>
        <input type="text" placeholder="some text"></input>
      </form>
      <Suspense fallback={<div>...Loading from Searchbar</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
