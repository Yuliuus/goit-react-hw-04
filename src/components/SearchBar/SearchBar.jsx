import css from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";

export default function SearchBar({ onSubmit }) {
  return (
    <header>
      <form className={css.searchBar}>
        <input
          className={css.searchInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.searchBtn} type="submit">
          <FaSearch className={css.searchIcon} />
        </button>
      </form>
    </header>
  );
}
