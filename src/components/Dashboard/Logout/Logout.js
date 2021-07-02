import React from 'react'
import styles from './Logout.module.scss'

const Logout =({firebase}) => {

   const logoutHandler = (evt) => {
        evt.preventDefault();
    }
    
    return ( <a onClick={logoutHandler} className={styles.button} href="/">
        Logout
    </a>
)};

export default Logout;