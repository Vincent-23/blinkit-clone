import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import HorizontalContainer from "../../atoms/horizotalContainer";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import styles from "./footerLogo.module.scss";

const FooterLogo = ({ className = "" }) => {
  return (
    <HorizontalContainer className={classNames(styles.container, className)}>
      <FacebookIcon className={styles.iconsItems} />
      <TwitterIcon className={styles.iconsItems} />
      <InstagramIcon className={styles.iconsItems} />
      <LinkedInIcon className={styles.iconsItems} />
    </HorizontalContainer>
  );
};

FooterLogo.propTypes = {
  className: PropTypes.string,
};

export default FooterLogo;
