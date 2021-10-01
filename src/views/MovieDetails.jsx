import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { getAllMovies } from '../redux/actions';

class MovieDetails extends Component {
  componentDidMount() {
    console.log('this.props MOVIE DETAILS: ', this.props);
  }

  clickMovie() {
    console.log('this worked');
  }

  render() {
    return (
      <div className="movie-container">
        <Link to='/' className="back-button">Back To Results</Link>
        <div className="inner-container">
          <h2>{this.props.selectedMovie.title}</h2>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.main.movies,
  selectedMovie: state.main.selectedMovie,
})

const mapDispatchToProps = dispatch => ({
  getAllMovies: () => dispatch(getAllMovies()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)
