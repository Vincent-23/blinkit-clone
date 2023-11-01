import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import styles from './searchBar.module.scss';


export default function SearchBar() {
    return (
        <div className={styles.searchBarContainer}>
          <SearchIcon className={styles.searchIcon} />
          <input className={styles.searchField} />
        </div>
    )
}