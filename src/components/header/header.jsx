import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loader from "../loader/loader";
import s from "./header.module.css";

export default function Header() {
  return (
    <>
      <header className={s.header}>
        <ul className={s.navList}>
          <NavLink to="/" className={s.navItem}>
            Photos
          </NavLink>
          <NavLink to="/videos" className={s.navItem}>
            Video
          </NavLink>
          <NavLink to="/illustrations" className={s.navItem}>
            Illustrations
          </NavLink>
          <NavLink to="/vectors" className={s.navItem}>
            Vectors
          </NavLink>
          <NavLink to="/music" className={s.navItem}>
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
