import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Entertainment Explorer</h2>

      <div className={styles.desc}>
        Keep up to date and explore vast amounts of your favourite media with a
        simple website.
      </div>
    </div>
  );
};

export default Header;
