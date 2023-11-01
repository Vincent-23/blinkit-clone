import React from "react";
import classNames from "classnames";
import VerticalContainer from "../../atoms/verticalContainer";
import HorizontalContainer from "../../atoms/horizotalContainer";
import CardItem from "../cardItem";
import styles from "./leftsideBar.module.scss";

const LeftSideBar = () => {
  return (
    <VerticalContainer className={styles.container}>
      {/* <HorizontalContainer> */}
        <CardItem />
      {/* </HorizontalContainer> */}
    </VerticalContainer>
  );
};

export default LeftSideBar;
