import React from "react";
import Auth from "./Auth/Auth";
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
