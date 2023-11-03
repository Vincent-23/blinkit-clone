import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import VerticalContainer from "../../atoms/verticalContainer";
import HorizontalContainer from "../../atoms/horizotalContainer";
import FooterPara from "../../molecules/footerPara";
import FooterLeftContent from "../../molecules/footerLeftContent";
import FooterDownloadContent from "../../molecules/footerDownloadContent";
import FooterLogo from "../../molecules/footerLogo";
import styles from "./footer.module.scss";

const Footer = ({ className = "" }) => {
  return (
    <VerticalContainer
      className={classNames(styles.footerContainer, className)}
    >
      <FooterPara className={classNames(styles.footerParaText)} />
      <HorizontalContainer>
        <FooterLeftContent
          className={classNames(styles.footerSinceCompanyText)}
        />
        <FooterDownloadContent
          className={classNames(styles.footerDownloadLogo)}
        />
        <FooterLogo className={classNames(styles.footerSocialMediaLogo)} />
      </HorizontalContainer>
    </VerticalContainer>
  );
};

Footer.propTypes = {
  classNames: PropTypes.string,
};

export default Footer;
