import { useEffect, useState } from "react";
import styles from "../index.module.css";
import api from "../services/api";
import { movieRating } from "../types";
import MovieTable from "../components/List/MovieTable";

const List = () => {
  const [movieRatings, setMovieRatings] = useState<movieRating[]>();
  const [listUpdated, setListUpdated] = useState(false);
  let rank = 0;

  useEffect(() => {
    api.get("movies/movie-ratings/").then((res) => setMovieRatings(res.data));
  }, [listUpdated]);

  const handleUpdateRating = (movie: movieRating, rating: number) => {
    api
      .put(`movies/movie-ratings/${movie.movie_id}/`, {
        id: movie.id,
        movie_id: movie.movie_id,
        poster_path: movie.poster_path,
        title: movie.title,
        rating: rating,
      })
      .then(() => setListUpdated(!listUpdated));
  };

  const handleDeleteRating = (movieId: number) => {
    api
      .delete(`movies/movie-ratings/${movieId}/`)
      .then(() => setListUpdated(!listUpdated));
  };

  console.log(movieRatings);

  return (
    <div className={styles["container"]}>
      {movieRatings != undefined ? (
        <MovieTable
          movieRatings={movieRatings}
          rank={rank}
          handleUpdateRating={handleUpdateRating}
          handleDeleteRating={handleDeleteRating}
        />
      ) : null}
    </div>
  );
};

export default List;
