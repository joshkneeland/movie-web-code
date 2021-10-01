import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link, withRouter, useHistory } from 'react-router-dom';
import { getAllMovies, getFilteredMovies, searchForMovie } from '../redux/actions';
import MoviesService from '../services/movies'
import './app.css';

function App(props) {
  const [homePath, setHomePath] = useState(false);
  let history = useHistory();

  useEffect(() => {
    MoviesService.getAllMovies()
      .then(res => {
        let newArr = [...res];
        props.getFilteredMovies(newArr);
      });
  }, [homePath]);

  useEffect(() => {
    if(props.history.location.pathname === '/') {
      setHomePath(true);
    } else {
      setHomePath(false);
    }
  });

  function handleChange(event) {
    let inputVal = event.target.value;

    if(event.key === 'Enter') {
      history.push(`/?q=${inputVal}`);
      props.searchForMovie(inputVal);
    }
  }

  return (
    <div className="app">
      <header>
        <div>
          <Link to="/" alt="The Movie List">
            <h1 className="title">My Movie DB</h1>
          </Link>
        </div>
        {
          props.history.location.pathname === '/'
            ? <input placeholder="time" onKeyDown={e => handleChange(e)} />
            : null
        }
      </header>
      {props.children}
    </div>
  );
}

const mapStateToProps = state => ({
  movies: state.main.movies,
  selectedMovie: state.main.selectedMovie,
  filteredMovies: state.main.filteredMovies,
})

const mapDispatchToProps = dispatch => ({
  getAllMovies: () => dispatch(getAllMovies()),
  getFilteredMovies: (movies) => dispatch(getFilteredMovies(movies)),
  searchForMovie: (movies) => dispatch(searchForMovie(movies)),
})

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(App);
