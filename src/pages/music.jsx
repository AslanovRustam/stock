import { useState, useEffect } from "react";
import Modal from "../components/modal/modal";
import SearchBar from "../components/serchbar/searchbar";
import Loader from "../components/loader/loader";
import MusicList from "../components/musicList/musicList";
import Button from "../components/button/button";
import ScrollToTopBtn from "../components/scrollToTopBtn/scrollToTopBtn";
import { AUTH_URL, getSpotifyToken } from "../services/apiSpotify";
import s from "../components/musicList/musicList.module.css";
import spotify from "../images/Spotify.png";
import axios from "axios";

export default function Music() {
  const [showModal, setShowmodal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [totalHits, setTotalHits] = useState(0);
  const [hits, setHits] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [video, setVideo] = useState("");
  const [token, setToken] = useState("");

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

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  const toggleModal = (vid) => {
    setShowmodal(!showModal);
    console.log("vid", vid);
    setVideo(vid.link);
  };

  const handleSubmit = (value) => {
    setSearchQuery(value);
    setTotalHits(0);
    setHits([]);
    setPage(1);
    setError(null);
    const search = async () => {
      const { data } = await axios.get("https://api.spotify.com/v1/search", {
        headers: { Authorization: `Bearer ${token}` },
        params: { q: value, type: "artist" },
      });
      setHits(data.artists.items);
    };
    search();
  };
  console.log("hits", hits);
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
            {hits && <MusicList items={hits} openModal={toggleModal} />}
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

      {/* {hits.length < totalHits && <Button setPage={setPage} page={page} />} */}
      {/* <ScrollToTopBtn /> */}
      {/* {loading && <Loader />} */}
      {/* {error && <div>{error}</div>} */}
      {/* {showModal && <Modal onClose={toggleModal} data={video} video />} */}
    </>
  );
}
