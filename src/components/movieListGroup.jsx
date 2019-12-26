import React from "react";
import { genres } from "../services/fakeGenreService";

const MovieListGroup = props => {
  const {
    genres,
    textProperty,
    valueProperty,
    onSelectedItem,
    selectedGenre
  } = props;

  console.log(genres);
  return (
    <div>
      <ul className="list-group">
        {genres.map(g => (
          <li
            key={g[valueProperty]}
            onClick={() => onSelectedItem(g)}
            className="list-group-item"
          >
            {g[textProperty]}
          </li>
        ))}
      </ul>
    </div>
  );
};

MovieListGroup.defaultProps = {
  valueProperty: "_id",
  textProperty: "name"
};

export default MovieListGroup;
