import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { connect, useDispatch } from 'react-redux';
import { getAllMovies, getSelectedMovie } from '../redux/actions';

// CLASS COMPONENT

// class Home extends Component {
//   componentDidMount() {
//     this.props.getAllMovies();
//     setTimeout(() => {
//       console.log('this.props.movies: ', this.props.movies);
//     }, 250);
//   }

//   clickMovie(movieParam) {
//     console.log('movieParam: ', movieParam);
//   }

//   render() {
//     return (
//       <div className="movie-container">
//         <div className="inner-container">
//         <h4>All Movies</h4>
//         <div className="movies">
//           {this.props.movies.map(movie => (
//             <div key={movie.imdbId} onClick={() => this.clickMovie(movie)} style={{backgroundImage: `url("${movie.poster}")` }} className="movie-wrapper">
//               <div className="movie-cover">
//               </div>
//               <h6>{movie.title}</h6>
//             </div>
//           ))}
//         </div>
//         </div>
//       </div>
//     )
//   }
// }

// FUNCTIONAL COMPONENT

function Home(props) {
  let history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    props.getAllMovies();
    setTimeout(() => {
      // console.log('props.movies: ', props.movies);
    }, 250);
  }, []);

  function clickMovie(movieParam) {
    // console.log('movieParam: ', movieParam);
    // dispatch({
    //   type: 'GET_SELECTED_MOVIE'
    // });
    props.getSelectedMovie(movieParam);
    history.push(`/movie-details/${movieParam.id}`);
  }

  return (
    <div className="movie-container">
      <div className="inner-container">
        <h4>All Movies</h4>
        <div className="movies">
          {props.movies.map(movie => (
            <div key={movie.imdbId} onClick={() => clickMovie(movie)} style={{backgroundImage: `url("${movie.poster}")` }} className="movie-wrapper">
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

const mapStateToProps = state => ({
  movies: state.main.movies,
  selectedMovie: state.main.selectedMovie,
})

const mapDispatchToProps = dispatch => ({
  getAllMovies: () => dispatch(getAllMovies()),
  getSelectedMovie: (movieParam) => dispatch(getSelectedMovie(movieParam)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
