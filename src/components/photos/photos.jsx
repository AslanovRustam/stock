import s from "./photos.module.css";
import Modal from "../modal/modal";
import { useState } from "react";

export default function Photos() {
  const [showModal, setShowmodal] = useState(false);
  const toggleModal = () => setShowmodal(!showModal);
  return (
    <>
      <div>qwe</div>
      <button type="button" onClick={toggleModal}>
        MODAL
      </button>
      {showModal && <Modal />}
    </>
  );
}
