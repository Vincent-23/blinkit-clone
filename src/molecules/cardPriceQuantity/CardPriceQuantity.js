import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import VerticalContainer from "../../atoms/verticalContainer";
import HorizontalContainer from "../../atoms/horizotalContainer";
import Text from "../../atoms/text";
import QuantityBtn from "../quantityBtn";
import styles from "./cardPriceQuantity.module.scss";

const CardPriceQuantity = ({ className = "", items = {} }) => {
  return (
    <HorizontalContainer
      className={classNames(styles.container, className)}
      key={items?.id}
    >
      <VerticalContainer className={classNames(styles.priceContainer)}>
        <Text
          className={classNames(styles.offerPrice)}
        >{`₹ ${items.sellingPrice}`}</Text>
        {items.sellingPrice !== items.actualPrice ? (
          <Text
            className={classNames(styles.mrpPrice)}
          >{`₹ ${items.actualPrice}`}</Text>
        ) : null}
      </VerticalContainer>
      <HorizontalContainer className={classNames(styles.quantityBtnItem)}>
        <QuantityBtn className={styles.quantityBtn} item={items} />
      </HorizontalContainer>
    </HorizontalContainer>
  );
};

CardPriceQuantity.propTypes = {
  className: PropTypes.string,
  items: PropTypes.object,
};

export default CardPriceQuantity;
