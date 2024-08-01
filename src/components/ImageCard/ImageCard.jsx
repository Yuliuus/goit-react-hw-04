import css from "./ImageCard.module.css";
export default function ImageCard({
  onModalOpen,
  item: {
    urls: { small, regular },
    alt_description,
  },
}) {
  return (
    <div className={css.imageContainer}>
      <img
        className={css.img}
        src={small}
        alt={alt_description}
        onClick={() =>
          onModalOpen({ urls: { small, regular }, alt_description })
        }
      />
    </div>
  );
}
