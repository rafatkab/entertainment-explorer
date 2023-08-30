import React from "react";

interface Props {
  title: string;
  homepage: string;
  synopsis: string;
  tagline: string;
  productionCompanies: { logo_path: string; name: string }[];
  productionCountries: string[];
  languages: string[];
  revenue: number;
}

const Details = ({
  title,
  homepage,
  synopsis,
  tagline,
  productionCompanies,
  productionCountries,
  languages,
  revenue,
}: Props) => {
  return (
    <div
      className="p-5 float-end border-info border-2"
      style={{
        width: "calc(100% - 388.63px)",
        borderLeft: "0px solid",
        borderBottom: "0px solid",
      }}
    >
      <div style={{ fontSize: "18px" }}>
        <h3>Homepage</h3>
        <a href={homepage} style={{ color: "#787276" }}>
          {title}
        </a>
      </div>
      <div className="mt-4" style={{ fontSize: "18px" }}>
        <h3>Synopsis</h3>
        <span style={{ color: "#787276" }}>{synopsis}</span>
      </div>
      <div className="mt-4" style={{ fontSize: "18px" }}>
        <h3>Tagline</h3>
        <span style={{ color: "#787276" }}>{tagline}</span>
      </div>
      <div className="mt-4" style={{ fontSize: "18px" }}>
        <h3>Production Companies</h3>
        <ul className="m-0 p-0" style={{ color: "#787276", listStyle: "none" }}>
          {productionCompanies.map(({ name, logo_path }) => (
            <li key={name}>
              <img
                src={`https://image.tmdb.org/t/p/original/${logo_path}`}
                style={{ height: "20px" }}
              />{" "}
              {name}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4" style={{ fontSize: "18px" }}>
        <h3>Production Countries</h3>
        <ul style={{ color: "#787276" }}>
          {productionCountries.map((country) => (
            <li key={country}>{country}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4" style={{ fontSize: "18px" }}>
        <h3>Languages Supported</h3>
        <ul style={{ color: "#787276" }}>
          {languages.map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4" style={{ fontSize: "18px" }}>
        <h3>Revenue</h3>
        <span style={{ color: "#787276" }}>
          ${revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </span>
      </div>
    </div>
  );
};

export default Details;
