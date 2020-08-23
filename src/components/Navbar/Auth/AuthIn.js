import React from 'react'
import {Link} from 'react-router-dom';
import * as ROUTES from '../../../constants/routes'
import Logout from '../../Dashboard/Logout/Logout'
import Logo from '../../Logo/Logo'
import MobileNav from '../../MobileNav/MobileNav'
import styles from './AuthIn.module.scss'

const AuthIn = () => (
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
    <Link to={ROUTES.DASHBOARD}> My Dashboard </Link>
    <Logout />
    </div>
    </nav>
    </>
)

export default AuthIn;