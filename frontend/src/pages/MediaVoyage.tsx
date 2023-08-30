import React, { useEffect, useState } from "react";
import axios from "axios";
import { movieObj } from "../types.ts";
import Header from "../components/MediaVoyage/Header/Header.tsx";
import Filters from "../components/MediaVoyage/Filters/Filters.tsx";
import Explorer from "../components/MediaVoyage/Explorer/Explorer.tsx";
import PageExplorer from "../components/MediaVoyage/PageExplorer.tsx";
import styles from "../index.module.css";
import apiKey from "../apiKey.ts";

const MediaVoyage = () => {
  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState();
  const [movies, setMovies] = useState();
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}`
  );
  const [finishLoading, setFinishLoading] = useState(false);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setMovies(res.data.results);
        setMaxPages(res.data.total_pages);
      })
      .then(() => {
        setFinishLoading(true);
      });
  }, [url]);

  const handleRegister = () => {};

  const handleSearch = (searchString: string) => {
    if (searchString == "") {
      setUrl(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}`
      );
    } else {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?query=${searchString}&api_key=${apiKey}`
      );
    }
  };

  const handleChangePage = (pageNum: number) => {
    setUrl(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${pageNum}`
    );
    setPage(pageNum);
  };

  useEffect(() => {
    console.log(movies);
  });

  return (
    <div className={styles["container"]}>
      <Header handleRegister={handleRegister} />
      <div>
        {movies != null && maxPages != null ? (
          <>
            <Explorer movies={movies} handleSearch={handleSearch} />{" "}
            <PageExplorer
              page={page}
              maxPages={maxPages > 500 ? 500 : maxPages}
              handleChangePage={handleChangePage}
            />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default MediaVoyage;
