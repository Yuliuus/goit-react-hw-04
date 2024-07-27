import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ items }) {
  return (
    <ul className={css.gallery}>
      {items.map((item) => (
        <li className={css.galleryItem} key={item.id}>
          <div>
            <ImageCard item={item} />
          </div>
        </li>
      ))}
    </ul>
  );
}
