import React from "react";
import classNames from "classnames";
import styles from "./image.module.scss";
import { Link } from "react-router-dom";

const Image = ({ className = "", to = "/", image }) => {
  return (
    <div className={classNames(styles.container, className)}>
      {/* <Link to={to}> */}
        <img className={styles.imageItem} src={image} />
      {/* </Link> */}
    </div>
  );
};

export default Image;
