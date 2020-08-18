import React from 'react';
import {FaBars } from 'react-icons/fa';
import styles from './Hamburger.module.scss';

const Hamburger = ({ onClickValue }) => {

  function handleClick(e) {
    onClickValue(e.target.name);
  }

    return (<FaBars className={styles.fabars} onClick={handleClick}></FaBars>)
};
export default Hamburger;