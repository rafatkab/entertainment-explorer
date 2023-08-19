import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { movieObj } from "./types.ts";
import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import Explorer from "./components/Explorer/Explorer";
import Register from "./components/Register/Register.tsx";
import styles from "./App.module.css";

const apiKey = "e7302831e722ba3bc60568d32b57443f";

const App = () => {
  const [page, setPage] = useState(1);
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}`
  );
  const [movies, setMovies] = useState();

  useEffect(() => {
    axios.get(url).then((res) => {
      setMovies(res.data.results);
    });
  }, [url]);

  // const [filters, setFilters] = useState(originalFilters);

  // useEffect(() => {
  //   let noFilter: boolean = true;

  //   for (const filter of filters) {
  //     if (filter.value == true) {
  //       noFilter = false;
  //     }
  //   }

  //   if (noFilter) {
  //     setMovies(originalMovies);
  //   } else {
  //     setMovies(
  //       originalMovies.filter((movie) => {
  //         for (const theme of movie.themes) {
  //           for (const { name, value } of filters) {
  //             if (theme.toLowerCase() == name.toLowerCase() && value) {
  //               return true;
  //             }
  //           }
  //         }

  //         return false;
  //       })
  //     );
  //   }
  // }, [filters]);

  // const handleFilters = (filterClicked: string, checkValue: boolean) => {
  //   setFilters(
  //     filters.map((filter) => {
  //       if (filter.name.toLowerCase() == filterClicked.toLowerCase()) {
  //         return { name: filter.name, value: checkValue };
  //       } else {
  //         return filter;
  //       }
  //     })
  //   );
  // };

  const handleRegister = () => {};

  const handleSearch = (searchString: string) => {
    if (searchString == "") {
      console.log("empty");

      setUrl(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}`
      );
    } else {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?query=${searchString}&api_key=${apiKey}`
      );
    }
  };

  return (
    <div className={styles["container"]}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header handleRegister={handleRegister} />
              <div className="d-flex align-items-start">
                {/* <Filters filters={filters} handleFilters={handleFilters} /> */}
                {movies != null ? (
                  <Explorer movies={movies} handleSearch={handleSearch} />
                ) : null}
              </div>
            </>
          }
        />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
