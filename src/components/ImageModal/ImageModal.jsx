import Modal from "react-modal";
import css from "./ImageModal.module.css";
Modal.setAppElement("#root");

export default function ImageModal({ item, isOpen, onRequestClose }) {
  if (!item) {
    return null;
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={css.overlay}
    >
      {isOpen && (
        <>
          <img
            src={item.urls.regular}
            alt={item.alt_description}
            className={css.img}
          />
        </>
      )}
    </Modal>
  );
}
