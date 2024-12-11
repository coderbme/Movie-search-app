// // api of t-title without map

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const MovieCard = () => {
//   const [movies, setMovies] = useState(""); // State to store movies
//   const [searchkeyword, setsearchkeyword] = useState(""); // State for search input

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await axios.get(
//           `http://www.omdbapi.com/?t=${searchkeyword}&apikey=64474193`
//         );

//         // searchkeyword(movies);
//         // wrong  setMovies(searchkeyword);
//         setMovies(response.data);
//         //console.log(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchMovies();
//   }, [searchkeyword]); // Empty dependency array to run only on mount
//   const handleinputchange = (e) => {
//     setsearchkeyword(e.target.value);
//   };

//   // Filter movies based on search query
//   // const filteredMovies = movies.filter((movie) =>
//   //   movie.title.toLowerCase().includes(searchQuery.toLowerCase())
//   // );

//   return (
//     <div className="container mx-auto p-4">
//       <div className="w-full h-auto rounded-2xl bg-slate-300 mt-20 mx-auto p-4 shadow-lg">
//         <input
//           type="text"
//           placeholder="Search your movie"
//           className="rounded-xl w-full h-10 p-2 border-none transition-all ease-in-out duration-800 transform hover:scale-20 "
//           value={searchkeyword}
//           onChange={handleinputchange} // Update search query
//         />
//         <div className="mt-4 ml-20 flex gap-5 overflow-hidden flex-wrap ">
//           {movies && movies.Response === "True" ? (
//             <div className="bg-white p-2 rounded-lg shadow mb-2 transition-transform duration-200 hover:scale-105">
//               <h3 className="font-bold">{movies.Title}</h3>
//               <p>Year: {movies.Year}</p>
//               <p>Released date: {movies.Released}</p>
//               <p> Gnere: {movies.Genre} </p>
//               <p>Language :{movies.Language} </p>
//               <img
//                 src={movies.Poster}
//                 className="w-72 h-80  mt-2 rounded-md"
//                 alt={movies.Title}
//               />
//             </div>
//           ) : searchkeyword == "" ? (
//             <p> Search your favourite movies </p>
//           ) : (
//             <p>Movie not found </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieCard;

/////////////////////////////////////////////////////////////////////////////////////CURRENT CODE search by t-title

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const MovieCard = () => {
// const [movies, setMovies] = useState(""); // State to store movies
// const [searchkeyword, setsearchkeyword] = useState(""); // State for search input

// useEffect(() => {
//   const fetchMovies = async () => {
//     try {
//       const response = await axios.get(
//         `http://www.omdbapi.com/?t=${searchkeyword}&apikey=64474193`
//       );

//       // searchkeyword(movies);
//       // wrong  setMovies(searchkeyword);
//       setMovies(response.data);
//       //console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   fetchMovies();
// }, [searchkeyword]); // Empty dependency array to run only on mount
// const handleinputchange = (e) => {
//   setsearchkeyword(e.target.value);
// };

//   // Filter movies based on search query
//   // const filteredMovies = movies.filter((movie) =>
//   //   movie.title.toLowerCase().includes(searchQuery.toLowerCase())
//   // );

//   return (
//     <div className="container mx-auto p-4">
//       <div className="w-full h-auto rounded-2xl bg-slate-300 mt-20 mx-auto p-4 shadow-lg">
//         <input
//           type="text"
//           placeholder="Search your movie"
//           className="rounded-xl w-full h-10 p-2 border-none transition-all ease-in-out duration-800 transform hover:scale-20 "
//           value={searchkeyword}
//           onChange={handleinputchange} // Update search query
//         />
//         <div className="mt-4 ml-20 flex gap-5 overflow-hidden flex-wrap ">
//           {movies && movies.Response === "True" ? (
// <div className="bg-white p-2 rounded-lg shadow mb-2 transition-transform duration-200 hover:scale-105">
//   <h3 className="font-bold">{movies.Title}</h3>
//   <p>Year: {movies.Year}</p>
//   <p>Released date: {movies.Released}</p>
//   <p> Gnere: {movies.Genre} </p>
//   <p>Language :{movies.Language} </p>
//   <img
//     src={movies.Poster}
//     className="w-72 h-80  mt-2 rounded-md"
//     alt={movies.Title}
//   />
// </div>
// ) : searchkeyword == "" ? (
//   <p> Search your favourite movies </p>
// ) : (
//   <p>Movie not found </p>
// )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieCard;

////-----------------------------------------------------------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////
//////// after search get result multiple but data like t parameter

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const MovieCard = () => {
//   const [movies, setMovies] = useState([]); // State to store movies
//   const [searchkeyword, setSearchKeyword] = useState(""); // State for search input

//   // Fetch search results and detailed information for each movie
//   useEffect(() => {
//     const fetchMovies = async () => {
//       if (searchkeyword.trim() === "") return; // Avoid empty search

//       try {
//         const response = await axios.get(
//           `http://www.omdbapi.com/?s=${searchkeyword.trim()}&apikey=64474193`
//         );

//         const detailedMovies = await Promise.all(
//           response.data.Search.map(async (movie) => {
//             const detailResponse = await axios.get(
//               `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=64474193`
//             );
//             return detailResponse.data; // Return detailed data
//           })
//         );

//         setMovies(detailedMovies); // Set detailed movie data
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchMovies();
//   }, [searchkeyword]);

//   const handleInputChange = (e) => {
//     setSearchKeyword(e.target.value); // Update search term
//   };

//   return (
//     <div>
//       <div className="w-auto h-auto rounded-2xl bg-slate-300 mt-20 mx-auto my-auto">
//         <input
//           type="text"
//           value={searchkeyword}
//           onChange={handleInputChange}
//           placeholder="Search your movie"
//           className="rounded-xl w-11/12 h-10 mt-4 ml-4 bg-slate-300 p-2 border-none transition-all ease-in-out duration-500 transform hover:scale-105 hover:shadow-sm focus:outline-none focus:shadow-black focus:shadow-lg focus:ring-0"
//         />
//       </div>
//       <div className="bg-slate-400 w-11/12 p-4 pl-12 rounded-xl mt-10 ml-5 flex flex-wrap gap-3">
//         {movies && movies.length > 0 ? (
//           movies.map((movie, index) => (
//             <div
//               key={index}
//               className="bg-white p-4 rounded-lg shadow mb-4 transition-transform duration-200 hover:scale-105"
//             >
//               <h3 className="font-bold">{movie.Title}</h3>
//               <p>Year: {movie.Year}</p>
//               <p>Genre: {movie.Genre}</p>
//               <p>Released: {movie.Released}</p>
//               <p>Rating: {movie.imdbRating}</p>
//               <p>Director: {movie.Director}</p>
//               <p>Actors: {movie.Actors}</p>
//               <p>Plot: {movie.Plot}</p>
//               <img
//                 src={movie.Poster}
//                 alt={movie.Title}
//                 className="w-72 h-80 mt-2 rounded-md"
//               />
//             </div>
//           ))
//         ) : searchkeyword === "" ? (
//           <p>Enter a movie title to search</p>
//         ) : (
//           <p>Movie not found, try a different title.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MovieCard;
////////////////////////////////////////////////////////////////////////////////////////////
// for at one time one component will runn
// import React, { useState, useEffect } from "react";
// import StaticMovies from "./Component/StaticMovies";
// import axios from "axios";

// const MovieCard = () => {
//   const [movies, setMovies] = useState([]); // State to store movies
//   const [searchKeyword, setSearchKeyword] = useState(""); // State for search input

//   useEffect(() => {
//     const fetchMovies = async () => {
//       if (searchKeyword) {
//         try {
//           const response = await axios.get(
//             `http://www.omdbapi.com/?s=${searchKeyword}&apikey=64474193`
//           );
//           setMovies(response.data.Search || []); // Ensure that movies is an empty array if no search results
//         } catch (error) {
//           console.error(error);
//         }
//       } else {
//         setMovies([]); // Clear the movies if searchKeyword is empty
//       }
//     };

//     fetchMovies();
//   }, [searchKeyword]);

//   const handleInputChange = (e) => {
//     setSearchKeyword(e.target.value);
//   };

//   return (
//     <div>
//       <div className="w-auto h-auto rounded-2xl bg-slate-300 mt-20 mx-auto my-auto">
//         <input
//           type="text"
//           value={searchKeyword}
//           onChange={handleInputChange}
//           placeholder="Search your movie"
//           className="rounded-xl w-80 h-10 mt-4 ml-4 p-2 border-none transition-all ease-in-out duration-500 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:shadow-black focus:shadow-lg focus:ring-0"
//         />
//       </div>

//       <div className="flex gap-4">
//         {movies.length > 0 ? (
//           // Render dynamic movies when the movie list is not empty
//           movies.map((el, index) => (
//             <div
//               key={index}
//               className="bg-white p-2 rounded-lg shadow mb-2 transition-transform duration-200 hover:scale-105"
//             >
//               <h3 className="font-bold">{el.Title}</h3>
//               <p>Year: {el.Year}</p>
//               <p>Genre: {el.Type}</p>
//               <img
//                 src={el.Poster}
//                 className="w-72 h-80 mt-2 rounded-md"
//                 alt={el.Title}
//         />
//       </div>
//     ))
//   ) : searchKeyword ? (
//     // If search keyword is entered but no results, show message
//     <p>Movie not found</p>
//   ) : (
//     // Show static movies only when no search keyword is entered
//     <StaticMovies />
//   )}
// </div>
//     </div>
//   );
// };

// export default MovieCard;
