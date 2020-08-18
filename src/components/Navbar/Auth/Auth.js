import React from 'react';
import styles from './Auth.module.scss';
import { Link } from "react-router-dom";
import * as ROUTES from '../../../constants/routes'
import Logo from '../../Logo/Logo'
import MobileNav from '../../MobileNav/MobileNav'

const Auth = () => (
    <>
    <nav>
        <div className={styles.header}>
          <Logo />
          <MobileNav />
        </div>
        <div>
          <ul className={styles.navmenu}>
            <li>
              <Link to={ROUTES.RECIPE_SEARCH}> Recipes</Link>
            </li>
            <li>
              <Link to={ROUTES.BUILD_TABLE}>Build A Table</Link>
            </li>
          </ul>
        </div>
    <div className={styles.auth}>
        <Link to={ROUTES.LOGIN}>Login</Link>
        <Link to={ROUTES.SIGNUP}>Sign Up</Link>
      </div>
      </nav>
    </>
);

export default Auth;