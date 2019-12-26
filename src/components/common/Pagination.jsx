import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = props => {
  const { moviesCount, pageSize, onPageClick, currentPage } = props;

  const size = Math.ceil(moviesCount / pageSize);

  const pages = _.range(1, size + 1);
  console.log("pages :", pages);

  /*

 {pages.map(page => ()
          <li key={page} className="page-item">
            <a className="page-link" onClick={onPageClick(page)}>
              {page}
            </a>
          </li>;
        })}
*/
  return (
    <nav className="navigation">
      <ul className="pagination">
        {pages.map(page => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => onPageClick(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  moviesCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageClick: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
};

export default Pagination;
