import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <p className={css.error}>
      Oops! It seems like the page need to be reloaded
    </p>
  );
}
