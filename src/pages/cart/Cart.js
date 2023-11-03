import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import CartDetails from "../../organisms/cartDetails";
import styles from "./cart.module.scss";

const Cart = ({ className = "" }) => {
  return <CartDetails className={classNames(styles.container, className)} />;
};

Cart.propTypes = {
  className: PropTypes.string,
};

export default Cart;
