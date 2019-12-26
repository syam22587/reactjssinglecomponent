import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres, genres } from "../services/fakeGenreService";

import Pagination from "./common/Pagination";
import paginate from "../utils/paginate";
import MovieListGroup from "./movieListGroup";
import MovieTable from "./movieTable";

import _ from "lodash";

class Movies extends Component {
  state = {
    allGenres: [],
    movies: [],
    pageSize: 5,
    currentPage: 1,
    selectedGenre: null,
    sortColumn: { path: "title", order: "desc" }
  };

  componentDidMount() {
    // Add all genne item as constant
    console.log("mounted");
    const allGenres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ allGenres: allGenres, movies: getMovies() });
  }

  // handle delete method

  handleDelete = movie => {
    //  console.log(movie);
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies }); // this is same as this.setState(movies : movies )
    this.render();
  };

  // handling the movie like button(heart)

  handleHeartSelect = movie => {
    console.log("heart clicked", movie);
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movie.like = movies[index].like === false ? true : false;
    this.setState({ movies });
  };

  //
  handleGetHeartClasses = movie => {
    console.log("get status ");
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    let classes = "fa fa-heart";
    classes += movies[index].like === false ? "-o" : "";
    console.log("classes  : ", classes);
    return classes;
  };

  // onpageclick
  handleOnPageClick = page => {
    this.setState({ currentPage: page });
  };

  //on handleOnGenreClick
  handleSelectedItem = genre => {
    console.log("On Genre click ", genre);
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleAllSelectedGenres = () => {
    this.setState({ selectedGenre: null });
  };

  // sorting the table hearders
  handleOnsort = sortColumn => {
    this.setState({ sortColumn });
  };

  getFilteredData = () => {
    // the reason why (selectedGenre && selectedGenre._id) to display all genere items.
    const {
      movies,
      pageSize,
      currentPage,
      selectedGenre,
      sortColumn
    } = this.state;
    const filteredMovies =
      selectedGenre && selectedGenre._id
        ? movies.filter(m => m.genre._id === selectedGenre._id)
        : movies;

    // sort the date after filtering it
    const sortedMovies = _.orderBy(
      filteredMovies,
      [sortColumn.path],
      [sortColumn.order]
    );

    console.log("sort by desc : ", sortedMovies);
    console.log("sortedMovies movies ", sortedMovies);
    const submovies = paginate(sortedMovies, currentPage, pageSize);

    return { totalLength: filteredMovies.length, data: submovies };
  };

  render() {
    // create a contant.
    const { length: count } = this.state.movies;

    if (count === 0)
      return (
        <React.Fragment>
          <p>There are no movies in the database </p>
        </React.Fragment>
      );

    const {
      movies,
      pageSize,
      currentPage,
      allGenres,
      selectedGenre,
      sortColumn
    } = this.state;

    const { totalLength, data } = this.getFilteredData();
    return (
      <React.Fragment>
        <p>There are {totalLength} movies available in the Databases. </p>

        {/* <div class="container"> */}
        <div class="row">
          <div class="col-3">
            <MovieListGroup
              genres={allGenres}
              onSelectedItem={this.handleSelectedItem}
              selectedGenre={this.selectedGenre}
              valueProperty="_id"
              textProperty="name"
            />
          </div>
          <div class="col-9">
            <MovieTable
              sortColumn={sortColumn}
              movies={data}
              onDelete={this.handleDelete}
              onHeartSelect={this.handleHeartSelect}
              onSort={this.handleOnsort}
              getHeartClasses={this.handleGetHeartClasses}
            />
            <Pagination
              moviesCount={totalLength}
              pageSize={pageSize}
              onPageClick={this.handleOnPageClick}
              currentPage={currentPage}
            />
          </div>
        </div>
        {/* </div> */}
      </React.Fragment>
    );
  }
}

export default Movies;
