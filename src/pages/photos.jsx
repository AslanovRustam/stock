import { useState, useEffect } from "react";
import Modal from "../components/modal/modal";
import SearchBar from "../components/serchbar/searchbar";
import Loader from "../components/loader/loader";
import ItemsList from "../components/itemsList/itemlist";
import Button from "../components/button/button";
import ScrollToTopBtn from "../components/scrollToTopBtn/scrollToTopBtn";
import { FetchImages } from "../services/api";

export default function Photos() {
  const [showModal, setShowmodal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [totalHits, setTotalHits] = useState(0);
  const [hits, setHits] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [largeImg, setLargeImg] = useState("");

  const toggleModal = (img) => {
    setShowmodal(!showModal);
    setLargeImg(img);
  };

  useEffect(() => {
    const getImages = async (query, page) => {
      if (!query) {
        return;
      }
      try {
        setLoading(true);
        const { data } = await FetchImages(query, page);
        setTotalHits(data.totalHits);
        setHits([...hits, ...data.hits]);
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

  return (
    <>
      <SearchBar submitForm={handleSubmit} />
      {hits && (
        <ItemsList
          items={hits}
          openModal={toggleModal}
          setLargeImg={setLargeImg}
        />
      )}
      {hits.length < totalHits && <Button setPage={setPage} page={page} />}
      <ScrollToTopBtn />
      {loading && <Loader />}
      {error && <div>{error}</div>}
      {showModal && <Modal onClose={toggleModal} data={largeImg} />}
    </>
  );
}
