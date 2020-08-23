import React, { useContext } from 'react';
import { Route, Redirect } from "react-router-dom";
import { AuthUserContext } from '../session';

const GuardedRoute = ({ component: Component, authUser, ...rest }) => {
    const user = useContext(AuthUserContext);

    return ( <Route {...rest} render={(props) => (
        user ? <Component {...props} />
         : <Redirect to='/' />
 )} />
)
    }

export default GuardedRoute;
