import styles from "./Filters.module.css";
import React from "react";

const Filters = () => {
  return (
    <>
      <div
        className={
          styles.container + " text-light bg-dark border border-2 border-info"
        }
      >
        Filters
      </div>
    </>
  );
};

export default Filters;
