import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllMovies } from '../redux/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'

class Home extends Component {
  componentDidMount() {
    this.props.getAllMovies()
  }

  render() {
    return (
      <div className="movie-container">
        <div className="inner-container">
        <h4>All Movies</h4>
        <div className="movies">
          {this.props.movies.map(movie => (
            <div key={movie.imdbId} className="movie-wrapper">
              <FontAwesomeIcon icon={faFilm} className="font-icon"/>
              <div className="movie-cover">
              </div>
              <h6>{movie.title}</h6>
            </div>
          ))}
        </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.main.movies,
})

const mapDispatchToProps = dispatch => ({
  getAllMovies: () => dispatch(getAllMovies())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
