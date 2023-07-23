import styles from "./Explorer.module.css";

const Explorer = () => {
  return (
    <>
      <div
        className={
          styles.container + " bg-dark text-light border border-2 border-info"
        }
      >
        Explorer
      </div>
    </>
  );
};

export default Explorer;
