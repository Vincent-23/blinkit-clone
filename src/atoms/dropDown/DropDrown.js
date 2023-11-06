import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import map from "lodash/map";
import styles from "./dropDown.module.scss";

const DropDrown = ({ className = "" }) => {
  const optionItemss = [
    { id: 1, label: "Ascending" },
    { id: 2, label: "Descending" },
    { id: 3, label: "Relevance" },
  ];
  return (
    <div className={classNames(styles.container, className)}>
      <label for="dropdown" className={classNames(styles.label, className)}>
        Sort By
      </label>
      <select id="dropdown" className={classNames(styles.select, className)}>
        {map(optionItemss, (items) => (
          <option value={items.label}>{items.label}</option>
        ))}
      </select>
    </div>
  );
};

DropDrown.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default DropDrown;
