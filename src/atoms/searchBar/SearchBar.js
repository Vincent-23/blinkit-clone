import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./searchBar.module.scss";

const SearchBar = ({
  className = "",
  values = "",
  onChange = () => {},
  ...rest
}) => {
  return (
    <div className={classNames(styles.searchBarContainer, className)}>
      <SearchIcon className={classNames(styles.searchIcon, className)} />
      <input
        value={values}
        onChange={onchange}
        className={classNames(styles.searchField, className)}
      />
    </div>
  );
};

SearchBar.propTypes = {
  className: PropTypes.string,
  values: PropTypes.string,
  onChange: PropTypes.func,
};

export default SearchBar;
