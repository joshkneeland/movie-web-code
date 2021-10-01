const initialState = {
  movies: [],
}

export const main = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL_MOVIES_LOADED':
    return {
      movies: action.payload.movies,
    }
    default:
    return state
  }
}
