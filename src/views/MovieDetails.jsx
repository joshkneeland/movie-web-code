import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { getAllMovies } from '../redux/actions';

class MovieDetails extends Component {
  componentDidMount() {
    console.log('this.props: ', this.props);
  }
  render() {
    return (
      <div className="movie-container">
        <Link to='/' className="back-button">Back To Results</Link>
        <div className="inner-container inner-container-movie-description">
          <div className="selected-movie-info">
            <img src={this.props.selectedMovie.poster} alt={this.props.selectedMovie.title} />
          </div>
          <div className="selected-movie-info">
            <h2 className="movie-name">{this.props.selectedMovie.title}</h2>
            <h4 className="movie-release-date">Release Date: {this.props.selectedMovie.releaseDate}</h4>
          </div>
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
