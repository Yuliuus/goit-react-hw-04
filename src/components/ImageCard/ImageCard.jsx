import css from "./ImageCard.module.css";
export default function ImageCard({
  item: {
    urls: { small },
    alt_description,
  },
}) {
  return (
    <div className={css.imageContainer}>
      <img className={css.img} src={small} alt={alt_description} />
    </div>
  );
}
