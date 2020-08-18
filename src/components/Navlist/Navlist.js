import React from 'react'
import styles from "./Navlist.module.scss"
import { Link } from 'react-router-dom'

const Navlist = ({onClickValue}) => {
  
  function handleClick(e) {
    onClickValue(e.target.name);
  }
    
    return (<>
    <ul className={styles.navlist}>
          <li>
            <Link to="/recipe-search" onClick={handleClick}> Recipes</Link>
          </li>
          <li>
            <Link to="/build-table" onClick={handleClick}>Build A Table</Link>
          </li>
          <li>
            <Link to="/login" onClick={handleClick}>Login</Link>
          </li>
          <li>
            <Link to="/signup" onClick={handleClick}>Sign Up</Link>
          </li>
        </ul>
    </>
);
    }

export default Navlist