import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Heading from "../../atoms/heading";
import styles from "./deliveryInfo.module.scss";

const DeliveryInfo = ({ className = "" }) => {
  return (
    <div className={classNames(styles.deliveryInfoContainer, className)}>
      <Heading textSize="lg" textBold="bold" className={styles.deliveryText}>
        Delivery in 11 minute
      </Heading>
      <Heading className={styles.locationText}>
        Bengaluru, Karnataka, India{" "}
        <ArrowDropDownIcon className={styles.searchIcon} />
      </Heading>
    </div>
  );
};

DeliveryInfo.propTypes = {
  className: PropTypes.string,
};

export default DeliveryInfo;
