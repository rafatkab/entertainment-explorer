let originalMovies = [
  {
    id: 1,
    themes: ["action", "drama", "horror"],
    title: "Oppenheimer",
    image:
      "https://www.cineplex.com/_next/image?url=https%3A%2F%2Fmediafiles.cineplex.com%2FCentral%2FFilm%2FPosters%2F33327_320_470.jpg&w=3840&q=75",
  },
  {
    id: 2,
    themes: ["drama", "action"],
    title: "Barbie",
    image:
      "https://www.cineplex.com/_next/image?url=https%3A%2F%2Fmediafiles.cineplex.com%2FCentral%2FFilm%2FPosters%2F34071_320_470.jpg&w=1920&q=75",
  },
  {
    id: 3,
    themes: ["action", "adventure"],
    title: "Mission Impossible: Dead Reckoning",
    image:
      "https://www.cineplex.com/_next/image?url=https%3A%2F%2Fmediafiles.cineplex.com%2FCentral%2FFilm%2FPosters%2F30463_320_470.jpg&w=1920&q=75",
  },
  {
    id: 4,
    themes: ["horror", "adventure"],
    title: "Haunted Mansion",
    image:
      "https://www.cineplex.com/_next/image?url=https%3A%2F%2Fmediafiles.cineplex.com%2FCentral%2FFilm%2FPosters%2F31965_320_470.jpg&w=1920&q=75",
  },
];

originalMovies = originalMovies.filter((movie) =>
movie.title.length >= 17
  ? (movie.title = movie.title.substring(0, 17) + " ...")
  : movie
)

const originalFilters = [
  {name: "Drama", value: false},
  {name: "Action", value: false},
  {name: "Horror", value: false},
  {name: "Comedy", value: false},
  {name: "Adventure", value: false},
];

export {originalFilters, originalMovies};
