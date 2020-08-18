import React, { useState } from "react";
import Hamburger from "../Hamburger/Hamburger";
import styles from "./MobileNav.module.scss";
import Navlist from "../Navlist/Navlist";
import Backdrop from '../Backdrop/Backdrop'

const MobileNav = () => {
  let [showMenuStatus, showMenu] = useState(false);

  const clicked = () => {
    showMenu((showMenuStatus = !showMenuStatus));
  };
  
  let navlist = null;
  let backdrop = null;

  if (showMenuStatus) {
    navlist = <Navlist onClickValue={clicked} />;
    backdrop = <Backdrop />
  }

  return (
    <>
      <div className={styles.navmenu}>
        <span>
          <Hamburger onClickValue={clicked}/>
        </span>
        {navlist}
        {backdrop}
      </div>
    </>
  );
};

export default MobileNav;
