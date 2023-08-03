import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles["sign-log"] + " btn btn-light "}>Log in</div>
      <div className={styles["sign-log"] + " btn btn-light"}>Sign up</div>
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
