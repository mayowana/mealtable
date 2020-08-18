import React from "react";
import styles from "./Logo.module.scss";
import { Link } from 'react-router-dom'

const Logo = () => (
  
    <Link to="/" className={styles.logo}>MealTable</Link>
  
);

export default Logo;
