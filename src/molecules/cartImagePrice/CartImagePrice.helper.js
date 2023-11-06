import React from "react";
import PropTypes from "prop-types";
import map from "lodash/map";
import CartImagePrice from ".";

const CartImagePriceElement = ({ items }) => {
  return map(items, (cartItem) => (
    <CartImagePrice items={cartItem} type="Cart" />
  ));
};
CartImagePriceElement.propTypes = {
  items: PropTypes.array,
};
export default CartImagePriceElement;
