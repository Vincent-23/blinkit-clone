import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import VerticalContainer from "../../atoms/verticalContainer";
import HorizontalContainer from "../../atoms/horizotalContainer";
import Text from "../../atoms/text";
import CartHelper from "../../helper/cartHelper";
import styles from "./cartLabelAndPrice.module.scss";

const CartLabelAndPrice = ({ className = "" }) => {
  const { getMRPAmount, getDiscountPrice } = CartHelper();
  return (
    <HorizontalContainer className={classNames(styles.container, className)}>
      <VerticalContainer className={classNames(styles.items)}>
        <Text className={classNames(styles.mrpText)}>MRP</Text>
        <Text className={classNames(styles.deliveryText)}>Delivery change</Text>
        <Text className={classNames(styles.discountText)}>
          Product discount
        </Text>
      </VerticalContainer>
      <VerticalContainer className={classNames(styles.items)}>
        <Text
          className={classNames(styles.mrpValue)}
        >{`₹ ${getMRPAmount()}`}</Text>
        <Text className={classNames(styles.deliveryCharge)}>Free</Text>
        <Text className={classNames(styles.discount)}>
          - ₹ {getDiscountPrice()}
        </Text>
      </VerticalContainer>
    </HorizontalContainer>
  );
};

CartLabelAndPrice.propTypes = {
  className: PropTypes.string,
};

export default CartLabelAndPrice;
