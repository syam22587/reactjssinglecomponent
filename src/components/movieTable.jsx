import React, { Component } from "react";
import Table from "./common/table";

class MoviesTable extends Component {
  columns = [
    { path: "title", title: "Title" },
    { path: "genre.name", title: "Genre" },
    { path: "numberInStock", title: "Stock Units" },
    { path: "dailyRentalRate", title: "Rate" },
    // { key: "like" },
    {
      key: "delete",
      content: mv => (
        <button
          onClick={() => this.props.onDelete(mv)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      )
    }
  ];

  render() {
    const { movies, onSort, sortColumn } = this.props;

    return (
      <Table
        data={movies}
        onSort={onSort}
        sortColumn={sortColumn}
        columns={this.columns}
      />
    );
  }
}

export default MoviesTable;