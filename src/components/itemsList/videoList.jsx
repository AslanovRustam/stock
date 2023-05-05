import s from "./itemList.module.css";

export default function Videolist({ items, openModal }) {
  return (
    <ul className={s.list}>
      {items.map(({ id, video_files, image, url }) => (
        <li key={id} className={s.item}>
          {/* <video src={videos.small.url} /> */}
          <img
            className={s.img}
            src={image}
            alt={url}
            onClick={() => openModal(video_files[0])}
          />
        </li>
      ))}
    </ul>
  );
}
