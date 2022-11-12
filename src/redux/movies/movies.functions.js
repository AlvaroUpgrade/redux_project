import axios from "axios";
import { API } from "../../shared/services/api";


export const getMovies = () => async(dispatch) =>{
    dispatch({type: 'gettingMovies'});
    
    try{
        const result = await axios.get("https://back-grupo-cea.vercel.app/movies");
        console.log('RESULT EN MOOVIES FUNCTION', result);
        dispatch({type:'getMovies', payload: result.data})
    } catch (error) {
        dispatch({type: 'errorMovies', payload: error.message});
    }
};

export const postMovies = () => async(dispatch) => {
 /*    try {
        const result = await API.post("movies/create", formdata);
    dispatch({ type: "register_user_ok" });
    console.log(resultado);
    navigate("/login");
  } catch (error) {
    dispatch({ type: "register_user_error" });
    } */
};

export const putMovies = () => async(dispatch) => {
    
};