import React from "react";

const StaticMovies = () => {
  const staticmoviesdata = [
    {
      imdbRating: 9.0,
      movie: "The Shawshank Redemption",
      releaseYear: 1951,
      genre: ["Adventure"],
      description: "This is the description for The Shawshank Redemption.",
      image: "https://m.media-amazon.com/images/I/71AzwgLT2WL.jpg",
      Language: "English",
    },
    {
      imdbRating: 9.0,
      movie: "The Godfather",
      releaseYear: 1952,
      genre: ["Drama", "Action"],
      description: "This is the description for The Godfather.",
      image:
        "https://i.pinimg.com/originals/c2/f9/22/c2f9227cfc8406afca7a266ee7d28b0a.jpg",
      Language: "English",
    },
    {
      imdbRating: 8.9,
      movie: "The Dark Knight",
      releaseYear: 1953,
      genre: ["Comedy", "Adventure"],
      description: "This is the description for The Dark Knight.",
      image: "https://via.placeholder.com/300x450?text=The+Dark+Knight",
      Language: "English",
    },
    {
      imdbRating: 8.9,
      movie: "12 Angry Men",
      releaseYear: 1954,
      genre: ["Drama", "Action"],
      description: "This is the description for 12 Angry Men.",
      image: "https://via.placeholder.com/300x450?text=12+Angry+Men",
      Language: "English",
    },
    {
      imdbRating: 8.9,
      movie: "Schindler's List",
      releaseYear: 1955,
      genre: ["Comedy", "Adventure"],
      description: "This is the description for Schindler's List.",
      image: "https://via.placeholder.com/300x450?text=Schindler's+List",
      Language: "English",
    },
    // {
    //   imdbRating: 8.9,
    //   movie: "The Lord of the Rings: The Return of the King",
    //   releaseYear: 1956,
    //   genre: ["Drama", "Action"],
    //   description:
    //     "This is the description for The Lord of the Rings: The Return of the King.",
    //   image:
    //     "https://via.placeholder.com/300x450?text=The+Lord+of+the+Rings:+The+Return+of+the+King",
    //   Language: "English",
    // },
    {
      imdbRating: 8.9,
      movie: "Pulp Fiction",
      releaseYear: 1957,
      genre: ["Comedy", "Adventure"],
      description: "This is the description for Pulp Fiction.",
      image: "https://via.placeholder.com/300x450?text=Pulp+Fiction",
      Language: "English",
    },
    {
      imdbRating: 8.8,
      movie: "The Good, the Bad and the Ugly",
      releaseYear: 1958,
      genre: ["Drama", "Action"],
      description:
        "This is the description for The Good, the Bad and the Ugly.",
      image:
        "https://via.placeholder.com/300x450?text=The+Good,+the+Bad+and+the+Ugly",
      Language: "English",
    },
    {
      imdbRating: 8.8,
      movie: "Forrest Gump",
      releaseYear: 1959,
      genre: ["Comedy", "Adventure"],
      description: "This is the description for Forrest Gump.",
      image: "https://via.placeholder.com/300x450?text=Forrest+Gump",
      Language: "English",
    },
    {
      imdbRating: 8.8,
      movie: "Fight Club",
      releaseYear: 1960,
      genre: ["Drama", "Action"],
      description: "This is the description for Fight Club.",
      image: "https://via.placeholder.com/300x450?text=Fight+Club",
      Language: "English",
    },

    {
      imdbRating: 8.8,
      movie: "Inception",
      releaseYear: 1961,
      genre: ["Comedy", "Adventure"],
      description: "This is the description for Inception.",
      image: "https://via.placeholder.com/300x450?text=Inception",
      Language: "English",
    },
    // {
    //   imdbRating: 8.8,
    //   movie: "The Lord of the Rings: The Fellowship of the Ring",
    //   releaseYear: 1962,
    //   genre: ["Drama", "Action"],
    //   description:
    //     "This is the description for The Lord of the Rings: The Fellowship of the Ring.",
    //   image:
    //     "https://via.placeholder.com/300x450?text=The+Lord+of+the+Rings:+The+Fellowship+of+the+Ring",
    //   Language: "English",
    // },
    // {
    //   imdbRating: 8.7,
    //   movie: "Star Wars: Episode V - The Empire Strikes Back",
    //   releaseYear: 1963,
    //   genre: ["Comedy", "Adventure"],
    //   description:
    //     "This is the description for Star Wars: Episode V - The Empire Strikes Back.",
    //   image:
    //     "https://via.placeholder.com/300x450?text=Star+Wars:+Episode+V+-+The+Empire+Strikes+Back",
    //   Language: "English",
    // },
    // {
    //   imdbRating: 8.7,
    //   movie: "The Lord of the Rings: The Two Towers",
    //   releaseYear: 1964,
    //   genre: ["Drama", "Action"],
    //   description:
    //     "This is the description for The Lord of the Rings: The Two Towers.",
    //   image:
    //     "https://via.placeholder.com/300x450?text=The+Lord+of+the+Rings:+The+Two+Towers",
    //   Language: "English",
    // },
    {
      imdbRating: 8.7,
      movie: "The Matrix",
      releaseYear: 1965,
      genre: ["Comedy", "Adventure"],
      description: "This is the description for The Matrix.",
      image: "https://via.placeholder.com/300x450?text=The+Matrix",
      Language: "English",
    },
    {
      imdbRating: 8.7,
      movie: "Goodfellas",
      releaseYear: 1966,
      genre: ["Drama", "Action"],
      description: "This is the description for Goodfellas.",
      image: "https://via.placeholder.com/300x450?text=Goodfellas",
      Language: "English",
    },
    {
      imdbRating: 8.7,
      movie: "One Flew Over the Cuckoo's Nest",
      releaseYear: 1967,
      genre: ["Comedy", "Adventure"],
      description:
        "This is the description for One Flew Over the Cuckoo's Nest.",
      image:
        "https://via.placeholder.com/300x450?text=One+Flew+Over+the+Cuckoo's+Nest",
      Language: "English",
    },
    {
      imdbRating: 8.6,
      movie: "Seven Samurai",
      releaseYear: 1968,
      genre: ["Drama", "Action"],
      description: "This is the description for Seven Samurai.",
      image: "https://via.placeholder.com/300x450?text=Seven+Samurai",
      Language: "English",
    },
    {
      imdbRating: 8.6,
      movie: "Se7en",
      releaseYear: 1969,
      genre: ["Comedy", "Adventure"],
      description: "This is the description for Se7en.",
      image: "https://via.placeholder.com/300x450?text=Se7en",
      Language: "English",
    },

    {
      imdbRating: 8.6,
      movie: "City of God",
      releaseYear: 1970,
      genre: ["Drama", "Action"],
      description: "This is the description for City of God.",
      image: "https://via.placeholder.com/300x450?text=City+of+God",
      Language: "English",
    },
    {
      imdbRating: 8.6,
      movie: "The Silence of the Lambs",
      releaseYear: 1971,
      genre: ["Comedy", "Adventure"],
      description: "This is the description for The Silence of the Lambs.",
      image:
        "https://via.placeholder.com/300x450?text=The+Silence+of+the+Lambs",
      Language: "English",
    },
    {
      imdbRating: 8.6,
      movie: "It's a Wonderful Life",
      releaseYear: 1972,
      genre: ["Drama", "Action"],
      description: "This is the description for It's a Wonderful Life.",
      image: "https://via.placeholder.com/300x450?text=It's+a+Wonderful+Life",
      Language: "English",
    },
  ];
  return (
    // <div
    //   // style={{ wodth: "1400px" }}
    //   // className=" h-96 p-4 mt-5 ml-7  bg-slate-60"
    //   className=" staticMovieContainer overflow-y-hidden min-h-screen bg-[#212121] flex flex-col items-center justify-center w-full mt-8 p-5"
    // >
    //   {/* <div className="bg-slate-300  w-11/12 mx-5 rounded-xl pl-5 p-4 h-auto"> */}
    //   <div className=" movieList grid grid-cols-2 gap-5 md:grid-cols-2 lg:grid-cols-4 w-full max-w-7xl">
    //     {/* <div className="flex flex-wrap  gap-3  overflow-x-auto "> NO-NEED */}
    //     {staticmoviesdata.map((movies, i) => (
    //       <div
    //         key={i}
    //         // className="flex w-80 bg-white pl-4 pt-3 pb-3 rounded-lg flex-col"
    //         style={{ height: "450px" }}
    //         className=" movieCard    w-full bg-white rounded-lg shadow-lg flex flex-col justify-between transform transition-transform hover:scale-105 hover:shadow-xl"
    //       >
    //         <img
    //           src={movies.image}
    //           // className="w-72 h-72  mt-2 rounded-md"
    //           className="w-full  object-cover rounded-t-lg"
    //           style={{ height: "320px" }}
    //           alt={movies.movie}
    //         />
    //         <div className="p-3">
    //           <h3 className="font-semibold w-full whitespace-nowrap text-center text-xl text-gray-800">
    //             {movies.movie}
    //           </h3>
    //           <p className="text-md text-center text-gray-600">
    //             IMDB Rating: {movies.imdbRating}
    //           </p>
    //           <p className="text-md text-center text-gray-600">
    //             Released Year: {movies.releaseYear}
    //           </p>
    //           <p className="text-md text-center text-gray-600">
    //             {" "}
    //             Gnere: {movies.genre}{" "}
    //           </p>
    //           <p className="text-md text-center text-gray-600">
    //             Language :{movies.Language}{" "}
    //           </p>
    //         </div>
    //         {/* <img
    //           src={movies.image}
    //           // className="w-72 h-72  mt-2 rounded-md"
    //           className="w-full mt-2 object-cover rounded-t-lg"
    //           style={{ height: "320px" }}
    //           alt={movies.movie}
    //         /> */}
    //       </div>
    //     ))}
    //     {/* </div> */}
    //   </div>
    // </div>

    <div className="staticMovieContainer mt-3 overflow-auto  flex flex-col items-center justify-center w-full min-h-screen p-5">
      <div className="movieList grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-4 w-full max-w-7xl">
        {staticmoviesdata.map((movies, i) => (
          <div
            key={i}
            className="movieCard max-h-[450px] w-full bg-zinc-700 rounded-lg shadow-lg flex flex-col justify-between transition-transform hover:scale-105 hover:shadow-xl overflow-hidden"
          >
            <img
              src={movies.image}
              className="w-full object-cover rounded-t-lg"
              alt={movies.movie}
              style={{ height: "320px" }}
            />
            <div className="p-1">
              <h3 className="font-semibold w-full text-ellipsis whitespace-nowrap overflow-hidden text-center text-xl text-white">
                {movies.movie}
              </h3>
              <p className="text-md text-center text-ellipsis  text-white">
                IMDB Rating: {movies.imdbRating}
              </p>
              <p className="text-md text-center text-ellipsis  text-white">
                Released Year: {movies.releaseYear}
              </p>
              <p className="text-md text-center text-ellipsis  text-white">
                Genre: {movies.genre.join(", ")}
              </p>
              <p className="text-md text-center text-ellipsis  text-white">
                Language: {movies.Language}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaticMovies;
