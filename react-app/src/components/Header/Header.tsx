import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div
        className={
          styles.container + " bg-dark text-light border border-2 border-info"
        }
      >
        <h1>Entertainment Explorer</h1>

        <div className={styles.desc + " text-success"}>
          Keep up to date and explore vast amounts of your favourite media with
          a simple website.
        </div>
      </div>
    </>
  );
};

export default Header;
