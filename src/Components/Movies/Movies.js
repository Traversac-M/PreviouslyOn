import React, { Component } from "react";
import axios from "axios";

export default class Movies extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    document.title = "PreviouslyOn - Movies";

    this.fetchMovies();
  }

  async fetchMovies() {
    let allMovies = await axios.get("movies/list?limit=10");
    let getMovies = allMovies.data.movies;

    this.setState({
      movies: getMovies
    });
    console.log(getMovies);
  }

  render() {
    const showMovies = this.state.movies.map(function(movie) {
      return (
        <div key={movie.id} className="row card">
          <div className="card-body">{movie.title}</div>
        </div>
      );
    });

    return (
      <div>
        <div className="text-center container mt-5 mb-5">{showMovies}</div>
      </div>
    );
  }
}
