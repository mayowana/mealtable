import React from 'react'
import styles from './Logout.module.scss'
import { useHistory } from "react-router";

const Logout =({firebase}) => {

    const history = useHistory();
   const logoutHandler = (evt) => {
        evt.preventDefault();
    }
    
    return ( <a onClick={logoutHandler} className={styles.button} href="/">
        Logout
    </a>
)};

export default Logout;