import s from "./itemList.module.css";

export default function ItemsList({ items, openModal }) {
  return (
    <ul className={s.list}>
      {items.map(({ id, webformatURL, largeImageURL, tags }) => (
        <li key={id} className={s.item}>
          <img
            className={s.img}
            src={webformatURL}
            alt={tags}
            onClick={() => openModal(largeImageURL)}
          />
        </li>
      ))}
    </ul>
  );
}
