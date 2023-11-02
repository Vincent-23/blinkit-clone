import React from "react";
import classNames from "classnames";
import Button from "../../atoms/button/Button";
import HorizontalContainer from "../../atoms/horizotalContainer";
import VerticalContainer from '../../atoms/verticalContainer';
import Text from "../../atoms/text";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./myCart.module.scss";

const MyCart = ({ className = "" }) => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.value);

  const handleNavigate = () => {
    navigate("/cart");
  };

  const getTotalAmount = () => {
    let total = 0;
    cart.forEach((e) => {
      if (e.quantity) total += e.quantity * e.sellingPrice;
    });
    return total;
    
  }

  const getTotalQuantity = () => {
    let quantity = 0;
    cart.forEach((e) => {
      if (e.quantity) quantity += e.quantity;
    });
    return quantity;
    
  }

  return (
    <Button className={classNames(styles.btnContainer, className)}>
      <HorizontalContainer
        className={classNames(styles.itemContainer, className)}
      >
        <AddShoppingCartIcon
          className={classNames(styles.shopIcon, className)}
        />
        {cart.length === 0 ? (
          <Text
            className={classNames(styles.cartText)}
            onClick={() => handleNavigate()}
          >
            {" "}
            My Cart
          </Text>
        ) : (
          <VerticalContainer className={styles.myCartValueContainer}>
            <Text className={classNames(styles.myCartValueItem)}>{getTotalQuantity()} items</Text>
            <Text className={classNames(styles.myCartPriceItem)}>₹ {getTotalAmount()}</Text>
          </VerticalContainer>
        )}
      </HorizontalContainer>
    </Button>
  );
};

export default MyCart;
