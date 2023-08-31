import styles from "./Explorer.module.css";
import { movieObj } from "../../../types.ts";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  movies: movieObj[];
  handleSearch: (searchString: string) => void;
}

const Explorer = ({ movies, handleSearch }: Props) => {
  const searchString = useRef(null);
  const [searchFocus, setSearchFocus] = useState(false);

  const handleKeyPress = (event: { key: string }) => {
    if (event.key === "Enter" && searchFocus) {
      if (searchString.current != null) {
        handleSearch(searchString.current.value);
      }
    }
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["section-container"]}>
        <div className="input-group float-start w-25 p-3">
          <span className="input-group-text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </span>
          <input
            className="form-control"
            placeholder="Search"
            aria-label="Search"
            onFocus={() => {
              setSearchFocus(true);
            }}
            onBlur={() => setSearchFocus(false)}
            onKeyUp={handleKeyPress}
            ref={searchString}
          ></input>
        </div>
        <div className={styles["section"]}>Movies</div>
        <div className={styles["section"]}>Games</div>
        <div className={styles["section"]}>Books</div>
      </div>
      <div className={styles["images-container"]}>
        {movies.map((movie) => (
          <div key={movie["id"]} className={styles["image"]}>
            <Link to={`movies/${movie.id}`}>
              <img
                className={styles["image"]}
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              />
            </Link>
            <div className={styles["title"]}>{movie["title"]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explorer;
