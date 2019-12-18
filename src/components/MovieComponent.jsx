import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movie extends Component {
  state = {
    counter: 0,
    movieDb: null
  };

  constructor() {
    super();
    this.movieDb = getMovies();
    this.counter = this.getMovieCount();
  }

  getMovieCount() {
    console.log(" Leng" + this.movieDb.length);
    this.setState({ counter: this.movieDb.length });
  }

  deleteMovie(id) {
    this.getMovieCount();
    console.log(id + " is clicked.");
  }

  // rending classess from external method
  getBadgeClasses() {
    let classes = "m-2 badge-";
    classes += this.state.counter === 0 ? "warning" : "primary";
    return classes;
  }

  render() {
    return (
      <React.Fragment>
        <h1 className={this.getBadgeClasses()}>
          Hello There ! Total movie count is : {this.state.counter}
        </h1>
        <table className="table table-bordered m-2">
          <tbody>
            {this.movieDb.map(movie => (
              <tr key={movie._id}>
                <td> {movie._id}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>
                  <button onClick={() => this.deleteMovie(movie._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movie;
