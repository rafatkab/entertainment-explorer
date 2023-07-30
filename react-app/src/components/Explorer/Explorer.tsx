import styles from "./Explorer.module.css";

interface Props {
  movies: { id: number; themes: string[]; title: string; image: string }[];
}

const Explorer = ({ movies }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles["images-container"]}>
        {movies.map((movie) => (
          <div key={movie.title} className={styles.image}>
            <img src={movie.image} />
            <div className={styles.title}>{movie.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explorer;
