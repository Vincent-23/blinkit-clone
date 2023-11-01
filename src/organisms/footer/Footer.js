import React from "react";
import classNames from "classnames";
import VerticalContainer from "../../atoms/verticalContainer";
import HorizontalContainer from "../../atoms/horizotalContainer";
import FooterPara from "../../molecules/footerPara";
import FooterLeftContent from "../../molecules/footerLeftContent";
import FooterDownloadContent from "../../molecules/footerDownloadContent";
import FooterLogo from "../../molecules/footerLogo";
import styles from "./footer.module.scss";

const Footer = ({ className = "" }) => {
  return (
    <VerticalContainer className={classNames(styles.footerContainer, className)}>
      <FooterPara className={classNames(styles.footerParaText, className)} />
      <VerticalContainer className={classNames(styles.footerLogoContainer, className)}>
        <HorizontalContainer>
          <FooterLeftContent className={classNames(styles.footerSinceCompanyText, className)}/>
          <FooterDownloadContent className={classNames(styles.footerDownloadLogo, className)}/>
          <FooterLogo className={classNames(styles.footerSocialMediaLogo, className)}/>
        </HorizontalContainer>
      </VerticalContainer>
    </VerticalContainer>
  );
};

export default Footer;
