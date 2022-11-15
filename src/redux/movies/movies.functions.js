import axios from "axios";
import { API, API2 } from "../../shared/services/api";

export const getMovies = () => async (dispatch) => {
  dispatch({ type: "gettingMovies" });

  try {
    const result = await axios.get("https://back-grupo-cea.vercel.app/movies");
    // console.log("RESULT EN MOOVIES FUNCTION", result);
    dispatch({ type: "getMovies", payload: result.data });
  } catch (error) {
    dispatch({ type: "errorMovies", payload: error.message });
  }
};

export const newMovie = (formdata, navigate) => async (dispatch) => {
  dispatch({ type: "postingMovie" });
  try {
    // console.log(formdata)
    const result = await API2.post("movies/create", formdata);
    
    dispatch({ type: "postMovie", payload: result.data });
    navigate("/");
  } catch (error) {
    dispatch({ type: "errorPostingMovie" });
  }
};

export const putMovies = () => async (dispatch) => {};
