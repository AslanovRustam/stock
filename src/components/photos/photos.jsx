import { useState, useEffect } from "react";
import s from "./photos.module.css";
import Modal from "../modal/modal";
import SearchBar from "../serchbar/searchbar";
import { FetchImages } from "../../services/api";

export default function Photos() {
  const [showModal, setShowmodal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [totalHits, setTotalHits] = useState(0);
  const [hits, setHits] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const toggleModal = () => setShowmodal(!showModal);

  useEffect(() => {
    const getImages = async (query, page) => {
      if (!query) {
        return;
      }
      setLoading(true);

      try {
        const { data } = await FetchImages(query, page);
        setTotalHits(data.totalHits);
        setHits(data.hits);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getImages(searchQuery, page);
  }, [searchQuery, searchQuery]);

  const handleSubmit = (data) => {
    setSearchQuery(data);
  };

  return (
    <>
      <SearchBar submitForm={handleSubmit} />
      {loading && <div>Loading...</div>}
      <button type="button" onClick={toggleModal}>
        MODAL
      </button>
      {showModal && <Modal />}
    </>
  );
}
