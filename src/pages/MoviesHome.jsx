import React, { useEffect } from "react";
/* import axios from "axios";
 */ import { useDispatch, useSelector } from "react-redux";
import ReusableButton from "../components/ReusableButton";
import { getMovies } from "../redux/movies/movies.functions";
import "./MoviesHome.scss";

const MoviesHome = () => {
  const dispatch = useDispatch();
  const { movies, isLoading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <div>
      {isLoading ? (
        <img src="/" alt="loading" />
      ) : !error ? (
        movies.map((movie) => {
          return (
            <div className="movie" key={movie._id}>
              <h3>{movie.title}</h3>
              <img src={movie.image} alt={movie.title} />
              <ReusableButton
                size="l"
                color="white"
                text="VER MÁS"
              ></ReusableButton>
            </div>
          );
        })
      ) : (
        <div style={{ background: "red" }}>
          <h2>{error}</h2>
        </div>
      )}
    </div>
  );
};

export default MoviesHome;
