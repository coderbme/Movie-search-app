import React from "react";
import MovieCard from "./Component/MovieCard";
import StaticMovies from "./Component/StaticMovies";
//import MoviePoster from "./Component/MoviePoster";

const App = () => {
  return (
    <div
      style={{
        backgroundImage: "url(bg.jpg",
        width: "100%",
        minHeight: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        overflow: "hidden",
        // display: "flex", // Using flexbox to center content
        // alignItems: "center", // Vertically center content
        // justifyContent: "center", // Horizontally center content
      }}

      // className="bg-zinc-800 overflow-hidden "
    >
      <MovieCard />
      <StaticMovies />
    </div>
  );
};

export default App;
