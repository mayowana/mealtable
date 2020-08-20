import React from 'react'
import {withFirebase} from '../../../firebase'
import styles from './Logout.module.scss'
import { useHistory } from "react-router";

const Logout =({firebase}) => {

    const history = useHistory();
   const logoutHandler = (evt) => {
        evt.preventDefault();
        firebase.doSignOut()
        history.push("/");
    }
    
    return ( <a onClick={logoutHandler} className={styles.button} href="/">
        Logout
    </a>
)};

export default withFirebase(Logout);