import MoviesService from '../services/movies'

export const getAllMovies = () => dispatch => {
  MoviesService.getAllMovies()
      .then(movies => {
        dispatch({
          type: 'ALL_MOVIES_LOADED',
          payload: {
            movies,
          }
        })
      })
}

export const searchForMovie = (movie) => dispatch => {
  MoviesService.getSelectedMovie(movie)
    .then(movies => {
      dispatch({
        type: 'SEARCH_FOR_MOVIE',
        payload: {
          searchedMovies: movies,
        }
      })
    })
}

export const getFilteredMovies = (getFilteredMovies) => dispatch => {
  dispatch({
    type: 'GET_FILTERED_MOVIES',
    payload: {
      filteredMovies: getFilteredMovies
    }
  });
}

export const getSelectedMovie = (getSelectedMovie) => dispatch => {
  dispatch({
    type: 'GET_SELECTED_MOVIE',
    payload: {
      selectedMovie: getSelectedMovie
    }
  });
}
