import { Rate } from "antd";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { FcCheckmark } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";

interface Props {
  movieId: number;
  posterPath: string;
  title: string;
  addedToList: boolean;

  handleAddToList: (
    posterPath: string,
    movieId: number,
    title: string,
    rating: number
  ) => void;
  handleRemoveFromList: () => void;
}

const Header = ({
  movieId,
  posterPath,
  title,
  addedToList,
  handleAddToList,
  handleRemoveFromList,
}: Props) => {
  const [rating, setRating] = useState<number>();
  const [errorMsg, setErrorMsg] = useState(false);

  return (
    <div className="p-5 pb-4 float-start" style={{ width: "388.63px" }}>
      <center>
        <img
          className="border border-info border-3"
          src={`https://image.tmdb.org/t/p/original/${posterPath}`}
          style={{ height: "400px", borderRadius: "35px", maxWidth: "300px" }}
        />

        {addedToList ? (
          <div className="mt-3 text-success fs-6">
            <FcCheckmark className="mx-1" /> This movie has been added your
            ratings list
          </div>
        ) : (
          <center>
            <Rate
              className="mt-3"
              allowClear={false}
              allowHalf={true}
              defaultValue={5}
              onChange={(num) => setRating(num)}
              character={<AiFillStar size={30} />}
            />
          </center>
        )}

        {addedToList == false ? (
          <button
            className=" mt-3 btn btn-warning"
            onClick={() =>
              rating != undefined
                ? handleAddToList(posterPath, movieId, title, rating)
                : setErrorMsg(true)
            }
          >
            Rate the movie
          </button>
        ) : (
          <button
            className="mt-3 btn btn-danger"
            onClick={() => {
              handleRemoveFromList();
              setErrorMsg(false);
              setRating(undefined);
            }}
          >
            Remove from list
          </button>
        )}
        {errorMsg && rating == undefined && (
          <div className="mt-2 text-danger">
            <RxCross2 className="mx-1" size={20} />
            You must first rate the movie
          </div>
        )}
      </center>
    </div>
  );
};

export default Header;
