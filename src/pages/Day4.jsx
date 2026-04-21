import React from "react";
import MoviesProvider from "../context/MoviesProvider";
import MoviesList from "../components/MoviesList";

function Day4() {
  return (
    <> <MoviesProvider>
       <div className="bg-black min-vh-100 py-4">
        <MoviesList />
      </div>
     </MoviesProvider>
     </>
    
  );
}

export default Day4;
