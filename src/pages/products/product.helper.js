import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import map from "lodash/map";
import CardDetails from "../../molecules/cardDetails";
import styles from "./product.module.scss";

const ListingCardProduct = ({ items = [] }) => {
  return map(items, (productItem) => (
    <CardDetails
      className={classNames(styles.cardItems)}
      items={productItem}
      key={productItem?.id}
    />
  ));
};

ListingCardProduct.propTypes = {
  items: PropTypes.array,
};

export default ListingCardProduct;
