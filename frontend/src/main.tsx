import React from "react";
import ReactDOM from "react-dom/client";
import MediaVoyage from "./pages/MediaVoyage";
import Register from "./pages/Register";
import Movie from "./pages/Movie";
import List from "./pages/List";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MediaVoyage />} />
        <Route path="register/" element={<Register />} />
        <Route path="movies/:id" element={<Movie />} />
        <Route path="movie-list/" element={<List />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
