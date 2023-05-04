import s from "./button.module.css";

export default function Button({ setPage, page }) {
  return (
    <div className={s.container}>
      <button className={s.btn} type="button" onClick={() => setPage(page + 1)}>
        Load More
      </button>
    </div>
  );
}
