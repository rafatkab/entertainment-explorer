import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/MediaVoyage/Header/Header.tsx";
import Explorer from "../components/MediaVoyage/Explorer/Explorer.tsx";
import PageExplorer from "../components/MediaVoyage/PageExplorer.tsx";
import styles from "../index.module.css";
import apiKey from "../apiKey.ts";
import { useParams, useNavigate } from "react-router-dom";

const MediaVoyage = () => {
  const navigate = useNavigate()
  const {page, search} = useParams();
  let searchString = search != undefined ? search : "home"
  let pageNum = page != undefined ? page : "1"
  const [maxPages, setMaxPages] = useState();
  const [movies, setMovies] = useState();
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${pageNum}`
  );
  
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setMovies(res.data.results);
        setMaxPages(res.data.total_pages);
      })
  }, [url]);

  // useEffect(() => {
  //   setUrl(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${pageNum}`);
  // }, [pageNum])

  useEffect(() => {
    if (searchString == ("home")) {
      setUrl(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${pageNum}`);
    }
    else {
      setUrl(`https://api.themoviedb.org/3/search/movie?query=${searchString}&api_key=${apiKey}&page=${pageNum}`)
    }}, [searchString, pageNum])

  console.log(url, search);
  

  const handleRegister = () => {};

  const handleSearch = (searchString: string) => {
    if (searchString == "") {
      // setUrl(
      //   `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${pageNum}`
      // );
      navigate(`home/1`)
    } else {
      // setUrl(
      //   `https://api.themoviedb.org/3/search/movie?query=${searchString}&api_key=${apiKey}`
      // );
      navigate(`/${searchString}/1`)
    }
  };

  return (
    <div className={styles["container"]}>
      <Header handleRegister={handleRegister} />
      <div>
        {movies != null && maxPages != null ? (
          <>
            <Explorer movies={movies} handleSearch={handleSearch} />{" "}
            <PageExplorer
              searchString={searchString}
              maxPages={maxPages > 500 ? 500 : maxPages}
            />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default MediaVoyage;
