import React from "react";

const MovieLike = props => {
  const { onLikeCall, movie: mv, getClasses } = props;
  return (
    <i
      style={{ cursor: "pointer" }}
      onClick={onLikeCall(mv)}
      className={getClasses(mv)}
      aria-hidden="false"
    ></i>
  );
};

export default MovieLike;
