const INITIAL_STATE = {
  movies: [],
  isLoading: false,
  error: false,
};

const moviesReducer = (state = INITIAL_STATE, action) => {
  const myMovies = state.movies;

  switch (action.type) {
    case "gettingMovies":
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case "getMovies":
      return {
        ...state,
        isLoading: false,
        error: false,
        movies: action.payload,
      };
    case "errorMovies":
      return {
        ...state,
        isLoading: false,
        movies: [],
        error: action.payload,
      };

    //Estados para hacer el post
    case "postingMovie":
      return {
        ...state,
        isLoading: true,
      };
    case "postMovie":
      return {
        ...state,
        movies: [...myMovies, action.payload],
        isLoading: false,
        error: false,
      };
    case "errorPostingMovie":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default moviesReducer;
