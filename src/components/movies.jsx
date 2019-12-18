import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  // handle delete method

  handleDelete = movie => {
    console.log(movie);
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies }); // this is same as this.setState(movies : movies )
  };

  render() {
    // create a contant
    const { length: count } = this.state.movies;

    if (count === 0) return <p>There are no movies in the database </p>;

    return (
      <React.Fragment>
        <p> There are {count} movies available in the Databases. </p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(mv => (
              <tr key={mv._id}>
                <td>{mv.title}</td>
                <td>{mv.genre.name}</td>
                <td>{mv.numberInStock}</td>
                <td>{mv.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(mv)}
                    className="btn btn-danger btn-sm"
                  >
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

export default Movies;
