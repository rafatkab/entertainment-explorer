import styles from "./Header.module.css";
import { Link } from "react-router-dom";

interface Props {
  handleRegister: () => void;
}

const Header = ({ handleRegister }: Props) => {
  return (
    <div className={styles["container"]}>
      <Link to="/login">
        <button className={styles["sign-log"] + " btn btn-light "}>
          Log in
        </button>
      </Link>
      <Link to="/register">
        <button
          className={styles["sign-log"] + " btn btn-light"}
          onClick={handleRegister}
        >
          Sign up
        </button>
      </Link>
      <Link to="movie-list/">
        <button className="float-start btn btn-info m-3">Movie List</button>
      </Link>
      <center>
        <h2 className={styles.header}>Media Voyage</h2>
      </center>
      <div className={styles["desc"]}>
        Keep up to date and explore vast amounts of your favourite media with a
        simple website.
      </div>
    </div>
  );
};

export default Header;
