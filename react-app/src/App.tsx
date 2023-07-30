import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import Explorer from "./components/Explorer/Explorer";
import { originalFilters, originalMovies } from "./database.ts";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState(originalMovies);
  const [filters, setFilters] = useState(originalFilters);

  const handleFilters = (filterClicked: string, checkValue: boolean) => {
    let filtersTemporary: { name: string; value: boolean }[] = [];
    let noFilter: boolean = true;

    setFilters(
      filters.map((filter) => {
        if (filter.name.toLowerCase() == filterClicked.toLowerCase()) {
          filtersTemporary.push({ name: filter.name, value: checkValue });
          return { name: filter.name, value: checkValue };
        } else {
          filtersTemporary.push(filter);
          return filter;
        }
      })
    );

    for (const filter of filtersTemporary) {
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
            for (const { name, value } of filtersTemporary) {
              if (theme.toLowerCase() == name.toLowerCase() && value) {
                return true;
              }
            }
          }

          return false;
        })
      );
    }
  };

  return (
    <>
      <Header />
      <Filters filters={filters} handleFilters={handleFilters} />
      <Explorer movies={movies} />
    </>
  );
};

export default App;
