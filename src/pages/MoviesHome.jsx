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
    <div className="containerMovies">
      {isLoading ? (
        <img className="imageLoading" src="https://www.icegif.com/wp-content/uploads/valentines-icegif-5.gif" alt="loading" />
      ) : !error ? (
        movies.map((movie) => {
          return (
            <div className="movie" key={movie._id}>
              <h3 className="title">{movie.title}</h3>
              <img className="movieImage" src={movie.image} alt={movie.title} />
              <ReusableButton
                size="l"
                color="yellow"
                text="VER MÁS"
                className="verMas"
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
