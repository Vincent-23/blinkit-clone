import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Outlet } from "react-router-dom";
import VerticalContainer from "../../atoms/verticalContainer";
import Header from "../../organisms/header";
import Footer from "../../organisms/footer";
import styles from "./home.module.scss";

const Home = ({ className = "" }) => {
  return (
    <VerticalContainer className={classNames(styles.container, className)}>
      <Header className={classNames(styles.headerItem)} />
      <Outlet className={classNames(styles.outletItem)} />
      <Footer className={classNames(styles.footerItem)} />
    </VerticalContainer>
  );
};

Home.propTypes = {
  className: PropTypes.string,
};

export default Home;
