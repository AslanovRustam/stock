import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loader from "../loader/loader";
import s from "./header.module.css";

export default function Header() {
  return (
    <>
      <header className={s.header}>
        <ul className={s.navList}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? s.active : s.navItem)}
          >
            Photos
          </NavLink>
          <NavLink
            to="/videos"
            className={({ isActive }) => (isActive ? s.active : s.navItem)}
          >
            Video
          </NavLink>
          <NavLink
            to="/music"
            className={({ isActive }) => (isActive ? s.active : s.navItem)}
          >
            Music
          </NavLink>
        </ul>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
