import s from "./musicList.module.css";
import noImage from "../../images/noImage.png";

export default function MusicList({ items, openModal }) {
  return (
    <ul className={s.list}>
      {items.map((artist) => (
        <li key={artist.id} className={s.item}>
          {artist.images.length ? (
            <img
              className={s.img}
              src={artist.images[0].url}
              alt={artist.name}
              onClick={() => openModal(artist.href)}
            />
          ) : (
            <img
              className={s.img}
              src={noImage}
              alt="no image"
              onClick={() => openModal(artist.href)}
            />
          )}

          {artist.name}
        </li>
      ))}
    </ul>
  );
}
