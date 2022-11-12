import axios from "axios";

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

export const postMovies = () => async(dispatch) => {};

export const putMovies = () => async(dispatch) => {};