import s from "./loader.module.css";

export default function Loader() {
  return (
    <div className={s.backDrop}>
      <div className={s.loader}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
