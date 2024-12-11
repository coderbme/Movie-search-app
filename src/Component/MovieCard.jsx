// //////////////////THIS IS for s keyword for at one time only one component will run

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Multibtns from "./Multibtns";

const MovieCard = () => {
  const [movies, setMovies] = useState([]); // State to store movies
  const [searchkeyword, setsearchkeyword] = useState("iron man"); // State for search input
  // setsearchkeyword(searchkeyword.trim(""));

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?s=${searchkeyword.trim()}&apikey=64474193`
        );

        // searchkeyword(movies);
        // wrong  setMovies(searchkeyword);
        setMovies(response.data.Search);
        // console.log(response.data.Search);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, [searchkeyword]);
  const handleinputchange = (e) => {
    setsearchkeyword(e.target.value);
  };
  const onclck = () => {
    prompt(`want to know more about? ${searchkeyword}`);
    alert("to Jake google krlena bhai");
  };

  return (
    <div className="flex flex-col justify-center mt-14 mx-auto w-full px-4 ">
      <h1 className="font-extrabold text-ellipsis  text-2xl text-center text-white ">
        Movie Search{" "}
      </h1>
      <div className="flex justify-center mb-15 mx-auto w-full lg:w-3/4 xl:w-2/3 px-4">
        <input
          type="text"
          value={searchkeyword}
          onChange={handleinputchange}
          placeholder="Search your movie"
          className="rounded-xl w-full max-w-md h-12 mt-4 justify-center bg-zinc-600 p-2 border-none "
        />
      </div>
      <Multibtns />
      {searchkeyword.trim() !== "" && (
        <div
          // style={{ width: "1400px" }}

          className=" grid grid-cols-2 gap-x-5 mt-5 sm: gap-y-15   md:grid-cols-2 gap-y-10 lg:grid-cols-4 gap-y-5 w-full max-w-7xl mx-auto "
        >
          {movies && movies.length > 0 ? (
            movies.map((el, i) => (
              <div
                onClick={onclck}
                key={i}
                style={{ height: "450px" }}
                className=" MovieCard w-full bg-zinc-700 rounded-lg shadow-lg flex flex-col justify-between transform transition-transform hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={el.Poster}
                  // className="w-72 h-80  mt-2 rounded-md"
                  className="w-96 object-cover rounded-t-lg"
                  style={{ height: "340px" }}
                  alt={el.Title}
                />
                <div className="pb-2">
                  <h3 className="font-semibold text-ellipsis  text-xl text-center text-white   ">
                    {el.Title}
                  </h3>
                  <p className="text-lg text-ellipsis text-center text-white">
                    Year: {el.Year}
                  </p>
                  {/* <p>Released date: {el.Released}</p> */}
                  <p className="text-lg text-ellipsis text-center text-white">
                    Type: {el.Type}
                  </p>
                </div>
                {/* <p>Language :{el.Language} </p> */}
                {/* <img
                  src={el.Poster}
                  // className="w-72 h-80  mt-2 rounded-md"
                  className="w-96 object-cover rounded-t-lg"
                  style={{ height: "340px" }}
                  alt={el.Title}
                /> */}
              </div>
            ))
          ) : (
            <p className="text-center text-lg text-white  col-span-full">
              Movies not found{" "}
            </p>
          )}
        </div>
      )}
    </div>
  );
};
export default MovieCard;
