import { createPortal } from "react-dom";
import s from "./modal.module.css";

const modalRoot = document.querySelector("#modal-root");

export default function Modal() {
  return createPortal(
    <div className={s.overlay}>
      <div className={s.modal}>MODAL</div>
    </div>,
    modalRoot
  );
}
