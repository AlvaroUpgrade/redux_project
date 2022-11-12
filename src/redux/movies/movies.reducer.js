const INITIAL_STATE = {
  movies: [],
  isLoading: false,
  error: false,
};

const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "gettingMovies":
      return { 
        ...state, 
        isLoading: true, 
        error: false 
      };
    case "getMovies":
      return {
        ...state,
        isLoading: false,
        error: false,
        movies: action.payload
      };
    case "errorMovies":
      return { 
        ...state, 
        isLoading: false, 
        movies: [],
        error: action.payload 
      };

    default:
      return state;
  }
};

export default moviesReducer;
