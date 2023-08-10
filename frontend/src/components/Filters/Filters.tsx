import styles from "./Filters.module.css";
import React from "react";

interface Props {
  filters: { name: string; value: boolean }[];
  handleFilters: (filter: string, value: boolean) => void;
}

const Filters = ({ filters, handleFilters }: Props) => {
  return (
    <div className={styles["container"]}>
      <div className="mx-3 fs-5">Filters</div>
      {filters.map((filter) => (
        <div key={filter.name} className={styles.filter}>
          <label className="form-check-label">
            <input
              className="form-check-input mx-2"
              onChange={(e) => handleFilters(filter.name, e.target.checked)}
              type="checkbox"
              autoComplete="off"
            />
            {filter.name}
          </label>{" "}
        </div>
      ))}
    </div>
  );
};

export default Filters;
