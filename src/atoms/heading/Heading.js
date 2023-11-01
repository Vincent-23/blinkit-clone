import React from "react";
import styles from "./heading.module.scss";

export default function Heading({ textSize = "", textAlign = "",textBold = "", children, ...rest }) {
  const fontSize = (textSize) => {
    let style;
    switch (textSize) {
      case "2xl":
        style = styles.text_6xl;
        break;
      case "sm":
        style = styles.text_sm;
        break;
      case "lg":
        style = styles.text_lg;
        break;
      case "xl":
        style = styles.text_xl;
        break;
      default:
        style = styles.text_xs;
        break;
    }
    return style;
  };

  //conditional styling

  const alignText = (textAlign) => {
    let align;
    switch (textAlign) {
      case "left":
        align = styles.text_left;
        break;
      case "right":
        align = styles.text_right;
        break;
      default:
        align = styles.center;
        break;
    }
  };

  const fontWeight = (textBold) => {
    let text;
    switch (textBold) {
      case "bold":
        text = styles.text_bold;
        break;
      default:
        text = "";
    }
    return text;
  };

  return (
    <div className={styles.headingContainer}>
      <h1 className={`${fontSize(textSize)} ${alignText(textAlign)} ${fontWeight(textBold)}`} {...rest}>
        {children}
      </h1>
    </div>
  );
}
