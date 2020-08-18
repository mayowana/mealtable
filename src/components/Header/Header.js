import React from "react";
import styles from "./Header.module.scss";
import { FaArrowRight } from "react-icons/fa";
import cooking from "./assets/cooking.svg";

const Header = () => (
  <>
    <div className={styles.header}>
      <div className={styles.hero}>
        <div className={styles.herotext}>
          <h1>Create your custom meal timetable</h1>
          <p>
            Combine different food items, compare nutritional information and
            more to make a meal table perfect for you.
          </p>
          <div className={styles.works}>
            <p>
              <strong>Get started</strong>
            </p>{" "}
            <FaArrowRight />
          </div>
        </div>

        <img className={styles.heroimg} src={cooking} alt="Cooking logo"></img>
      </div>
    </div>
  </>
);

export default Header;
