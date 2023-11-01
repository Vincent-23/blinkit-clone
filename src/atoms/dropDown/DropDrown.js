import React from "react";
import classNames from "classnames";
import styles from "./dropDown.module.scss";

const DropDrown = ({ className = "", labelText = "", optionItems = [] }) => {
    const optionItemss = [
        {"id": 1, "label":"Ascending"},
        {"id": 2, "label":"Descending"},
        {"id": 3, "label":"Relevance"},
    ]
  return (
    <div className={classNames(styles.container, className)}>
      <label for="dropdown" className={classNames(styles.label, className)}>
        Sort By
      </label>
      <select id="dropdown" className={classNames(styles.select, className)}>
        {optionItemss.map((items) => (
        //   <div key={items.id}>
            <option value={items.label}>{items.label}</option>
        //   </div>
        ))}
      </select>
    </div>
  );
};

export default DropDrown;
