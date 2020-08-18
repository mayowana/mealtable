import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import styles from './Footer.module.scss'

const Footer = () => (
    <>
        <div className={styles.footer}>
            <div>
                <p>© MealTable 2020</p>
            </div>

            <div>
                <FaFacebook className={styles.icons}/>
                <FaTwitter className={styles.icons}/>
                <FaInstagram className={styles.icons}/>
            </div>
        </div>
    </>
);

export default Footer;