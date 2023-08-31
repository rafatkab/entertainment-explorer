interface Props {
  movieTitle: string;
  releaseDate: string;
  status: string;
  runtime: number;
  genres: string[];
}

const GeneralDetails = ({
  movieTitle,
  releaseDate,
  status,
  runtime,
  genres,
}: Props) => {
  return (
    <div className="p-5 pb-3 " style={{ width: "388.63px" }}>
      <div className="mt-3" style={{ fontSize: "18px" }}>
        <h3>Title</h3>
        <span style={{ color: "#787276" }}>{movieTitle}</span>
      </div>
      <div className="mt-4" style={{ fontSize: "18px" }}>
        <h3>Release Date</h3>
        <span style={{ color: "#787276" }}>{releaseDate}</span>
      </div>
      <div className="mt-4" style={{ fontSize: "18px" }}>
        <h3>Status</h3>
        <span style={{ color: "#787276" }}>{status}</span>
      </div>
      <div className="mt-4" style={{ fontSize: "18px" }}>
        <h3>Duration</h3>
        <span style={{ color: "#787276" }}>{runtime} minutes</span>
      </div>
      <div className="mt-4" style={{ fontSize: "18px" }}>
        <h3>Genres</h3>
        <ul>
          {genres.map((genre) => (
            <li key={genre} style={{ color: "#787276" }}>
              {genre}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GeneralDetails;
