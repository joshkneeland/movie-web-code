import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import { getAllMovies, getSelectedMovie } from '../redux/actions';

function Home(props) {
  let history = useHistory();

  useEffect(() => {
    props.getAllMovies();
  }, []);

  function clickMovie(movieParam) {
    props.getSelectedMovie(movieParam);
    history.push(`/movie-details/${movieParam.id}`);
  }

  return (
    <div className="movie-container">
      <div className="inner-container">
        <h4>All Movies</h4>
        <div className="movies">
          {
            props.filteredMovies ? props.filteredMovies.map(movie => (
                <div key={movie.imdbId} onClick={() => clickMovie(movie)} style={{backgroundImage: `url("${movie.poster}")` }} className="movie-wrapper">
                  <div className="movie-cover">
                  </div>
                  <h6>{movie.title}</h6>
                </div>
              )) : null
          }
          {
            props.filteredMovies && props.filteredMovies.length === 0 ? (
              <div>
                <h2>Oops, something went wrong!</h2>
              </div>
            ) : null
          }
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  movies: state.main.movies,
  filteredMovies: state.main.filteredMovies,
  selectedMovie: state.main.selectedMovie,
})

const mapDispatchToProps = dispatch => ({
  getAllMovies: () => dispatch(getAllMovies()),
  getSelectedMovie: (movieParam) => dispatch(getSelectedMovie(movieParam)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
