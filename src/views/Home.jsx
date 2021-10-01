import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllMovies } from '../redux/actions';

class Home extends Component {
  componentDidMount() {
    this.props.getAllMovies();
    console.log('this.props.movies: ', this.props.movies);
  }

  clickMovie() {
    console.log('this worked');
  }

  render() {
    return (
      <div className="movie-container">
        <div className="inner-container">
        <h4>All Movies</h4>
        <div className="movies">
          {this.props.movies.map(movie => (
            <div key={movie.imdbId} onClick={this.clickMovie} style={{backgroundImage: `url("${movie.poster}")` }} className="movie-wrapper">
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
