import s from "./modal.module.css";
import { createPortal } from "react-dom";
import { useCallback, useEffect } from "react";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ onClose, data, video }) {
  useEffect(() => {
    document.body.classList.add(s.overvlow);
    return () => {
      document.body.classList.remove(s.overvlow);
    };
  }, []);
  const escFunction = useCallback((event) => {
    if (event.key === "Escape") {
      onClose();
    }
  }, []);
  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={s.modalBackDrop} onClick={handleBackdropClick}>
      <div className={s.container}>
        {video ? (
          <video className={s.video} controls="controls">
            {" "}
            <source src={data} type="video/mp4" />
          </video>
        ) : (
          <img className={s.img} src={data} alt={data} />
        )}
      </div>
    </div>,
    modalRoot
  );
}
