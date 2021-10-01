const initialState = {
  movies: [],
}

export const main = (state = initialState, action) => {
  // console.log('REDUCERS was hit');
  // console.log('state: ', state);
  console.log('action: ', action);
  switch (action.type) {
    case 'ALL_MOVIES_LOADED':
      return {
        movies: action.payload.movies,
      }
    case 'GET_SELECTED_MOVIE':
      console.log('action.payload: ', action.payload);
      return {
        ...state,
        selectedMovie: action.payload.selectedMovie
      }
    default:
    return state
  }
}
