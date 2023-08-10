import styles from "./Header.module.css";
import { Link } from "react-router-dom";

interface Props {
  handleRegister: () => void;
}

const Header = ({ handleRegister }: Props) => {
  return (
    <div className={styles["container"]}>
      <button className={styles["sign-log"] + " btn btn-light "}>Log in</button>
      <Link to="/register">
        <button
          className={styles["sign-log"] + " btn btn-light"}
          onClick={handleRegister}
        >
          Sign up
        </button>
      </Link>
      <div className="form-check form-switch float-start m-3 fs-5 ">
        <label className="form-check-label">
          Dark mode
          <input className="form-check-input" type="checkbox" role="switch" />
        </label>
      </div>
      <div></div>
      <center>
        <h2 className={styles.header}>Entertainment Explorer</h2>
      </center>
      <div className={styles["desc"]}>
        Keep up to date and explore vast amounts of your favourite media with a
        simple website.
      </div>
    </div>
  );
};

export default Header;
