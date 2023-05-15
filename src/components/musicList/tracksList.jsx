import s from "./musicList.module.css";
import noImage from "../../images/noImage.png";

export default function TrackList({ items, chooseTrack }) {
  function handlePlay(uri) {
    chooseTrack(uri);
  }
  return (
    <ul className={s.list}>
      {items?.map((artist) => (
        <li key={artist.id} className={s.item}>
          {artist.album.images.length ? (
            <img
              className={s.img}
              src={artist.album.images[0].url}
              alt={artist.name}
              onClick={() => handlePlay(artist.uri)}
            />
          ) : (
            <img
              className={s.img}
              src={noImage}
              alt="no image"
              onClick={() => handlePlay(artist.uri)}
            />
          )}

          <p>{artist.artists[0].name}</p>
          <p>{artist.name}</p>
        </li>
      ))}
    </ul>
  );
}
