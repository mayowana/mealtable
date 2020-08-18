import React from "react";
import styles from "./Navbar.module.scss";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import MobileNav from "../MobileNav/MobileNav";
import Auth from "./Auth/Auth";
import * as ROUTES from "../../constants/routes";
import { AuthUserContext } from "../../session";
import AuthIn from "./Auth/AuthIn";

const Navbar = () => (
  
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <AuthIn /> : <Auth />
      }
    </AuthUserContext.Consumer>

    <AuthUserContext.Consumer>
      {authUser => console.log(authUser)}
    </AuthUserContext.Consumer>
  </div>

);

export default Navbar;
