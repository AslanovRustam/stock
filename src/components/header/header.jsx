import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import s from "./header.module.css";
import SearchBar from "../serchbar/searchbar";

export default function Header() {
  return (
    <>
      <header className={s.header}>
        <ul className={s.navList}>
          <NavLink to="/" className={s.navItem}>
            photos
          </NavLink>
          <NavLink to="/illustrations" className={s.navItem}>
            Illustrations
          </NavLink>
          <NavLink to="/vectors" className={s.navItem}>
            Vectors
          </NavLink>
          <NavLink to="/videos" className={s.navItem}>
            Videos
          </NavLink>
          <NavLink to="/music" className={s.navItem}>
            Music
          </NavLink>
        </ul>
      </header>
      <Suspense fallback={<div>...Loading</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
