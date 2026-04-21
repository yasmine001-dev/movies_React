import React, { useState, useEffect } from "react";
import { MoviesContext } from "./MoviesContext";

const genreMap = {
  28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy",
  80: "Crime", 99: "Documentary", 18: "Drama", 10751: "Family",
  14: "Fantasy", 36: "History", 27: "Horror", 10402: "Music",
  9648: "Mystery", 10749: "Romance", 878: "Sci-Fi", 10770: "TV Movie",
  53: "Thriller", 10752: "War", 37: "Western"
};

function MoviesProvider(props) {
  const [movies, setMovies] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=5f578814d42d6ed8b4a30a18ff0e580c&include_adult=false&certification_country=US&certification.lte=PG-13&sort_by=popularity.desc")
      .then((res) => res.json())
      .then((data) => {
        const formattedMovies = data.results.map((movie) => ({
          id: movie.id,
          title: movie.title,
          category: movie.genre_ids[0] ? genreMap[movie.genre_ids[0]] || "Other" : "Other",
          description: movie.overview || "No description available.",
          poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        }));
        setMovies(formattedMovies);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const categories = ["All", ...new Set(movies.map((m) => m.category))];

  const filteredMovies = selectedCategory === "All"
    ? movies
    : movies.filter((m) => m.category === selectedCategory);

  return (
    <MoviesContext.Provider value={{ filteredMovies, categories, selectedCategory, setSelectedCategory, loading }}>
      {props.children}
    </MoviesContext.Provider>
  );
}

export default MoviesProvider;