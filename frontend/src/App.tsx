import { Routes, Route } from "react-router-dom";
import MediaVoyage from "./pages/MediaVoyage";
import Movie from "./pages/Movie";
import Register from "./pages/Register";
import List from "./pages/List";
import Login from "./pages/Login";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="register/" element={<Register />} />
        <Route path="login/" element={<Login />} />
        <Route path="/" element={<MediaVoyage />} />
        <Route path="movies/:id" element={<Movie />} />
        <Route path="movie-list/" element={<List />} />
      </Routes>
    </div>
  );
};

export default App;
