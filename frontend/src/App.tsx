import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import api from "./api";
import axios from "axios";
import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import Explorer from "./components/Explorer/Explorer";
import Register from "./components/Register/Register.tsx";
import { originalFilters, originalMovies } from "./database.ts";
import styles from "./App.module.css";

const App = () => {
  const [movies, setMovies] = useState(originalMovies);
  const [filters, setFilters] = useState(originalFilters);

  useEffect(() => {
    let noFilter: boolean = true;

    for (const filter of filters) {
      if (filter.value == true) {
        noFilter = false;
      }
    }

    if (noFilter) {
      setMovies(originalMovies);
    } else {
      setMovies(
        originalMovies.filter((movie) => {
          for (const theme of movie.themes) {
            for (const { name, value } of filters) {
              if (theme.toLowerCase() == name.toLowerCase() && value) {
                return true;
              }
            }
          }

          return false;
        })
      );
    }
  }, [filters]);

  const handleFilters = (filterClicked: string, checkValue: boolean) => {
    setFilters(
      filters.map((filter) => {
        if (filter.name.toLowerCase() == filterClicked.toLowerCase()) {
          return { name: filter.name, value: checkValue };
        } else {
          return filter;
        }
      })
    );
  };

  const handleRegister = () => {};

  return (
    <div className={styles["container"]}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header handleRegister={handleRegister} />
              <div className="d-flex align-items-start">
                <Filters filters={filters} handleFilters={handleFilters} />
                <Explorer movies={movies} />
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
