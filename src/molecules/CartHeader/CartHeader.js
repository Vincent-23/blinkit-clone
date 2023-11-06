import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import VerticalContainer from "../../atoms/verticalContainer";
import Text from "../../atoms/text";
import styles from "./cartHeader.module.scss";

const CartHeader = ({ className = "" }) => {
  return (
    <VerticalContainer className={classNames(styles.container, className)}>
      <Text className={classNames(styles.placeOrderText, className)}>
        Place Order
      </Text>
      <VerticalContainer
        className={classNames(styles.deliveryItems)}
      >
        <Text className={classNames(styles.deliveryText)}>
          Delivery in 15 minutes
        </Text>
        <Text className={classNames(styles.quantity)}>1 item</Text>
      </VerticalContainer>
    </VerticalContainer>
  );
};

CartHeader.propTypes = {
  className: PropTypes.string,
};

export default CartHeader;
