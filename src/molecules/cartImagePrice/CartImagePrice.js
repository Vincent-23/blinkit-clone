import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import VerticalContainer from "../../atoms/verticalContainer";
import HorizontalContainer from "../../atoms/horizotalContainer";
import Image from "../../atoms/image";
import Text from "../../atoms/text";
import QuantityBtn from "../quantityBtn";
import styles from "./cartImagePrice.module.scss";

const CartImagePrice = ({ className = "", items = {}, type = "" }) => {
  return (
    <VerticalContainer className={classNames(styles.container, className)}>
      <HorizontalContainer className={classNames(styles.container, className)}>
        <Image
          className={classNames(styles.imageItem, className)}
          image={items?.productImage}
        />
        <VerticalContainer
          className={classNames(styles.textContainer, className)}
        >
          <Text className={classNames(styles.titleText, className)}>
            {items?.productName}
          </Text>
          <Text className={classNames(styles.weightText, className)}>
            {items?.productQuantity}
          </Text>
          <Text
            className={classNames(styles.PriceText, className)}
          >{`₹ ${items?.actualPrice}`}</Text>
        </VerticalContainer>
        <QuantityBtn item={items} type={type} />
      </HorizontalContainer>
    </VerticalContainer>
  );
};

CartImagePrice.propTypes = {
  className: PropTypes.string,
  items: PropTypes.object,
  type: PropTypes.string,
};

export default CartImagePrice;
