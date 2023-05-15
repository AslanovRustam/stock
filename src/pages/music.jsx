import { useState, useEffect } from "react";
import axios from "axios";
import { AUTH_URL, FetchTracks } from "../services/apiSpotify";
import SearchBar from "../components/serchbar/searchbar";
import Loader from "../components/loader/loader";
import MusicList from "../components/musicList/musicList";
import TrackList from "../components/musicList/tracksList";
import ScrollToTopBtn from "../components/scrollToTopBtn/scrollToTopBtn";
import Player from "../components/Player/player";
import spotify from "../images/Spotify.png";
import s from "../components/musicList/musicList.module.css";

export default function Music() {
  const [searchQuery, setSearchQuery] = useState("");
  const [artistItems, setArtistItems] = useState([]);
  const [tracksItems, setTracksItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState("");
  const [playingTrack, setPlayingTrack] = useState();

  useEffect(() => {
    const hash = window.location.hash;
    let tokenLoc = window.localStorage.getItem("token");
    if (!tokenLoc && hash) {
      tokenLoc = hash
        .substring(1)
        .split("&")
        .find((el) => el.startsWith("access_token"))
        .split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("token", tokenLoc);
    }
    setToken(tokenLoc);
  }, []);

  useEffect(() => {
    const getTracks = async (query, token) => {
      if (!query) {
        return;
      }
      try {
        setLoading(true);
        const { data } = await FetchTracks(query, token);
        setArtistItems(data.artists);
        setTracksItems(data.tracks);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getTracks(searchQuery, token);
  }, [searchQuery, token]);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  const handleSubmit = (value) => {
    setSearchQuery(value);
    setArtistItems([]);
    setTracksItems([]);
    setError(null);
    setLoading(false);
  };
  function chooseTrack(track) {
    setPlayingTrack(track);
  }

  return (
    <>
      <div className={s.container}>
        {token ? (
          <div className={s.wrapper}>
            {" "}
            <button className={s.btn} type="button" onClick={logout}>
              log out
            </button>
            <SearchBar submitForm={handleSubmit} />
            {/* {artistItems?.items?.length > 0 && (
              <MusicList items={artistItems.items} openModal={toggleModal} />
            )} */}
            {tracksItems?.items?.length > 0 && (
              <TrackList items={tracksItems.items} chooseTrack={chooseTrack} />
            )}
            {tracksItems?.items?.length > 0 && (
              <Player token={token} trackUri={playingTrack} />
            )}
          </div>
        ) : (
          <div className={s.btnWrapper}>
            <a href={AUTH_URL}>
              <div
                className={`${s.btn} ${!token && s.btnLogin}`}
                onClick={logout}
              >
                <img
                  className={s.imgSpotify}
                  src={spotify}
                  alt="spotify icon"
                />
                Login
              </div>
            </a>
          </div>
        )}
      </div>

      <ScrollToTopBtn />
      {loading && <Loader />}
      {error && <div>{error}</div>}
    </>
  );
}
