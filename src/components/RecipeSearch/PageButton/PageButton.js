import React from "react";
import styles from "./PageButton.module.scss";

const PageButton = (props) => {
  
  return (
    <button onClick={props.clicked} className={styles.pagers}>
      {props.children}{" "}
    </button>
  );
};

export const HideButton = () => <button className={styles.hidden}></button>;

export default PageButton;
