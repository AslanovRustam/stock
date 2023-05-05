import { useState, useEffect } from "react";
// import { FetchVideo } from "../services/apiVideo";
import Modal from "../components/modal/modal";
import SearchBar from "../components/serchbar/searchbar";
import Loader from "../components/loader/loader";
import Videolist from "../components/itemsList/videoList";
import Button from "../components/button/button";
import ScrollToTopBtn from "../components/scrollToTopBtn/scrollToTopBtn";
import { FetchVideo } from "../services/apiVideo";

export default function Videos() {
  const [showModal, setShowmodal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [totalHits, setTotalHits] = useState(0);
  const [hits, setHits] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [video, setVideo] = useState("");

  const toggleModal = (vid) => {
    setShowmodal(!showModal);
    console.log("vid", vid);
    setVideo(vid.link);
  };

  useEffect(() => {
    const getImages = async (query, page) => {
      if (!query) {
        return;
      }
      try {
        setLoading(true);
        const data = await FetchVideo(query, page);
        setTotalHits(data.data.total_results);
        setHits([...hits, ...data.data.videos]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getImages(searchQuery, page);
  }, [searchQuery, page]);

  const handleSubmit = (data) => {
    setSearchQuery(data);
    setTotalHits(0);
    setHits([]);
    setPage(1);
    setError(null);
  };
  console.log("hits", hits);
  return (
    <>
      <SearchBar submitForm={handleSubmit} />
      {hits && <Videolist items={hits} openModal={toggleModal} />}
      {hits.length < totalHits && <Button setPage={setPage} page={page} />}
      <ScrollToTopBtn />
      {loading && <Loader />}
      {error && <div>{error}</div>}
      {showModal && <Modal onClose={toggleModal} data={video} video />}
    </>
  );
}
