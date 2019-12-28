import React from "react";

const MovieForm = ({ match, history }) => {
  return (
    <div>
      <h1>Movie Form</h1>
      <h3>Received input is : {match.params.id} </h3>
      <button onClick={() => history.push("/movies")}>Save</button>
    </div>
  );
};

export default MovieForm;
