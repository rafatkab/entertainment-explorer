import { useState } from "react";
import { movieRating } from "../../types";
import { Rate } from "antd";

interface Props {
  movieRatings: movieRating[];
  rank: number;
  handleUpdateRating: (movie: movieRating, rating: number) => void;
  handleDeleteRating: (movieId: number) => void;
}

const MovieTable = ({
  movieRatings,
  rank,
  handleUpdateRating,
  handleDeleteRating,
}: Props) => {
  const [editCurrentRatingId, setEditCurrentRatingId] = useState<number>();
  const [editMsg, setEditMsg] = useState<string>("Edit");
  const [newRating, setNewRating] = useState<number>(0);

  return (
    <center>
      <table
        className="table table-bordered table-dark m-4"
        style={{ width: "810px" }}
      >
        <thead>
          <tr>
            <th scope="col" style={{ width: "60px", textAlign: "center" }}>
              Rank
            </th>
            <th scope="col" style={{ width: "100px", textAlign: "center" }}>
              Poster
            </th>
            <th scope="col" style={{ width: "300px", textAlign: "center" }}>
              Title
            </th>
            <th scope="col" style={{ width: "160px", textAlign: "center" }}>
              Rating
            </th>
            <th scope="col" style={{ width: "90px", textAlign: "center" }}>
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {movieRatings != null
            ? movieRatings.map((movieRating) => (
                <tr key={movieRating.id}>
                  <td className="fs-2 align-middle text-center">{++rank}</td>
                  <td>
                    <center>
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${movieRating.poster_path}`}
                        style={{ height: "100px", maxWidth: "100px" }}
                      />
                    </center>
                  </td>
                  <td className="align-middle text-center">
                    {movieRating.title}
                  </td>
                  <td className="fs-3 text-center">
                    <button
                      className="btn btn-outline-info"
                      style={{ fontSize: "12px" }}
                      onClick={() => {
                        if (editCurrentRatingId != movieRating.id) {
                          setEditCurrentRatingId(movieRating.id);
                          setEditMsg("Stop editing");
                        } else {
                          if (editMsg == "Stop editing") {
                            setEditCurrentRatingId(undefined);
                            setEditMsg("Edit");
                          } else if (editMsg == "Save changes") {
                            setEditCurrentRatingId(undefined);
                            setEditMsg("Edit");
                            handleUpdateRating(movieRating, newRating);
                          }
                        }
                      }}
                    >
                      {editCurrentRatingId == movieRating.id ? editMsg : "Edit"}
                    </button>
                    <div>
                      <Rate
                        allowClear={false}
                        allowHalf={true}
                        disabled={
                          editCurrentRatingId == movieRating.id ? false : true
                        }
                        count={
                          editCurrentRatingId == movieRating.id
                            ? 5
                            : Math.round(movieRating.rating)
                        }
                        defaultValue={4}
                        value={
                          editCurrentRatingId == movieRating.id
                            ? undefined
                            : movieRating.rating
                        }
                        onChange={(num) =>
                          num != movieRating.rating
                            ? (setEditMsg("Save changes"), setNewRating(num))
                            : (setEditMsg("Stop editing"), setNewRating(0))
                        }
                      />
                    </div>
                  </td>
                  <td className="align-middle text-center">
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => handleDeleteRating(movieRating.movie_id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </center>
  );
};

export default MovieTable;
