const initialState = {
  movies: []
}

export const main = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL_MOVIES_LOADED':
      return {
        movies: action.payload.movies,
      }
    case 'GET_FILTERED_MOVIES':
        return {
          ...state,
          filteredMovies: action.payload.filteredMovies
        }
    case 'SEARCH_FOR_MOVIE':
      return {
        ...state,
        filteredMovies: action.payload.searchedMovies
      }
    case 'GET_SELECTED_MOVIE':
      return {
        ...state,
        selectedMovie: action.payload.selectedMovie
      }
    default:
    return state
  }
}
