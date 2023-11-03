import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import CategoryItems from "../../datas/CategoryItems.json";
import VerticalContainer from "../../atoms/verticalContainer";
import CategoryListElement from "./cardItem.helper";
import styles from "./cardItem.module.scss";

const CardItem = ({ className = "" }) => {
  return (
    <VerticalContainer className={classNames(styles.container, className)}>
      <CategoryListElement
        className={classNames(styles.categoryItem)}
        categoryList={CategoryItems}
      />
    </VerticalContainer>
  );
};

CardItem.propTypes = {
  className: PropTypes.string,
};

export default CardItem;
