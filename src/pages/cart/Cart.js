import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import CartDetails from "../../organisms/cartDetails";
import NoCartFound from "../../molecules/noCartFound/NoCartFound";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./cart.module.scss";

const Cart = ({ className = "" }) => {
  const cart = useSelector((state) => state.cart.value);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
  }
  console.log(cart.length !== 0, cart.length, cart);
  return (
    cart.length !== 0 ? 
    <CartDetails className={classNames(styles.container, className)} /> :
    <NoCartFound className={classNames(styles.noCartItem)} onNavigateClick={handleNavigate}/>
  ) 
};

Cart.propTypes = {
  className: PropTypes.string,
};

export default Cart;
