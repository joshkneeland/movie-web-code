
const MoviesService = {
  getAllMovies: () => fetch('http://localhost:3001/movies/all')
      .then(function(response) {
        return response.json();
      }),
  getSelectedMovie: (param) => fetch(`http://localhost:3001/movies/search?s=[${param}]`)
      .then(function(response) {
        return response.json();
      })
}

export default MoviesService;
