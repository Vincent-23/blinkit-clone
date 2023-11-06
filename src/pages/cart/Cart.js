import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import CartDetails from "../../organisms/cartDetails";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./cart.module.scss";

const Cart = ({ className = "" }) => {
  const cart = useSelector((state) => state.cart);

  return (
  <CartDetails className={classNames(styles.container, className)} />)
};

Cart.propTypes = {
  className: PropTypes.string,
};

export default Cart;
