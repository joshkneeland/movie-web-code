import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <div className="title-wrapper">
            <Link to="/" alt="The Movie List">
              <h1 className="title">My Movie DB</h1>
            </Link>
          </div>
        </header>

        {this.props.children}
      </div>
    );
  }
}

export default App;
