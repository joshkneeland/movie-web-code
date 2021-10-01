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

export const getSelectedMovie = (getSelectedMovie) => dispatch => {
  // console.log('GET_SELECTED_MOVIE was hit');
  // console.log('getSelectedMovie: ', getSelectedMovie);
  dispatch({
    type: 'GET_SELECTED_MOVIE',
    payload: {
      selectedMovie: getSelectedMovie
    }
  });
}
