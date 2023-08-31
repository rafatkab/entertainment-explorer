import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { movieDetails } from "../types";
import apiKey from "../apiKey";
import styles from "../index.module.css";
import Details from "../components/Movie/Details";
import Header from "../components/Movie/Header";
import GeneralDetails from "../components/Movie/GeneralDetails";
import api from "../services/api";

const Movie = () => {
  const [movie, setMovie] = useState<movieDetails>();
  const [addedToList, setAddedToList] = useState(false);
  const currentPath = useLocation();
  const id = currentPath.pathname.substring(8);

  useEffect(() => {
    axios
      .all([
        axios.get(
          `
        https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
        ),
        api.get(`movies/movie-ratings/${parseInt(id)}`),
      ])
      .then(
        axios.spread((res1, res2) => {
          setMovie(res1.data);

          // for (let i = 0; i < res2.data.length; i++) {
          //   if (res2.data[i].movie_id == id) {
          //     setAddedToList(true);
          //     break;
          //   }
          // }
          setAddedToList(res2.data);
        })
      );
  }, [id]);

  const handleAddToList = (
    posterPath: string,
    movieId: number,
    title: string,
    rating: number
  ) => {
    api
      .post("movies/movie-ratings/", {
        movie_id: movieId,
        poster_path: posterPath,
        title: title,
        rating: rating,
      })
      .then((res) => console.log(res));

    setAddedToList(true);
  };

  const handleRemoveFromList = () => {
    api
      .delete(`movies/movie-ratings/${id}/`)
      .then((res) => console.log(res.data));

    setAddedToList(false);
  };

  return (
    <div className={styles["container"]}>
      {movie != null ? (
        <>
          <div className="float-start">
            <Header
              movieId={parseInt(movie.id)}
              posterPath={movie.poster_path}
              title={movie.title}
              addedToList={addedToList}
              handleAddToList={handleAddToList}
              handleRemoveFromList={handleRemoveFromList}
            />
            <GeneralDetails
              movieTitle={movie.title}
              releaseDate={movie.release_date}
              status={movie.status}
              runtime={movie.runtime}
              genres={movie.genres.map(({ name }) => name)}
            />
          </div>
          <Details
            title={movie.title}
            homepage={movie.homepage}
            synopsis={movie.overview}
            tagline={movie.tagline}
            productionCompanies={movie.production_companies.map(
              ({ logo_path, name }) => {
                return { logo_path, name };
              }
            )}
            productionCountries={movie.production_countries.map(
              ({ name }) => name
            )}
            languages={movie.spoken_languages.map(
              ({ english_name }) => english_name
            )}
            revenue={movie.revenue}
          />
        </>
      ) : null}
    </div>
  );
};

export default Movie;
