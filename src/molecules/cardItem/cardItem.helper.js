import React, { useContext } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import map from "lodash/map";
import { ProductContext } from "../../context/ProductContext";
import Image from "../../atoms/image";
import styles from "./cardItem.module.scss";

const CategoryListElement = ({ className = "", categoryList = [] }) => {
  const { setProductType } = useContext(ProductContext);
  const handleProductData = (itemType) => {
    setProductType(itemType);
  };
  return map(categoryList, (items) => (
    <div
      onClick={() => handleProductData(items?.title)}
      className={classNames(styles.itemContainer, className)}
    >
      <div className={classNames(styles.imageContainer, className)}>
        <Image
          className={classNames(styles.imageItem, className)}
          image={items?.image}
        />
      </div>
      <div className={classNames(styles.textItem, className)}>
        {items?.title}
      </div>
    </div>
  ));
};

CategoryListElement.propTypes = {
  className: PropTypes.string,
  categoryList: PropTypes.array,
};

export default CategoryListElement;
