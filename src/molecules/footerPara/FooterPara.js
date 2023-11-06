import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import VerticalContainer from "../../atoms/verticalContainer";
import Text from "../../atoms/text";
import styles from "./footerPara.module.scss";

const FooterPara = ({ className = "" }) => {
  return (
    <VerticalContainer
      className={classNames(styles.footerParaContainer, className)}
    >
      <Text className={classNames(styles.footerParaItem)}>
        “Blinkit” is owned & managed by "Blink Commerce Private Limited"
        (formerly known as Grofers India Private Limited) and is not related,
        linked or interconnected in whatsoever manner or nature, to “GROFFR.COM”
        which is a real estate services business operated by “Redstone
        Consultancy Services Private Limited”.
      </Text>
    </VerticalContainer>
  );
};

FooterPara.propTypes = {
  className: PropTypes.string,
};

export default FooterPara;
