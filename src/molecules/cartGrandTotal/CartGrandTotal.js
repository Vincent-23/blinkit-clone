import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import VerticalContainer from "../../atoms/verticalContainer";
import HorizontalContainer from "../../atoms/horizotalContainer";
import Text from "../../atoms/text";
import cartHelper from "../../helper/cartHelper";
import styles from "./cartGrandTotal.module.scss";

const CartGrandTotal = ({ className = " " }) => {

  const { getTotalAmount } = cartHelper();
  return (
    <VerticalContainer className={classNames(styles.container, className)}>
      <HorizontalContainer className={classNames(styles.items)}>
        <Text className={classNames(styles.grandTotal)}>Grand Total</Text>
        <Text
          className={classNames(styles.totalPrice)}
        >{`₹ ${getTotalAmount()}`}</Text>
      </HorizontalContainer>
      <Text className={classNames(styles.couponText)}>
        Coupons are only applicable on the Blinkit app
      </Text>
    </VerticalContainer>
  );
};

CartGrandTotal.propTypes = {
  className: PropTypes.string,
};

export default CartGrandTotal;
