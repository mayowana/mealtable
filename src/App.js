import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { Provider, useSelector } from "react-redux";
import store from "./redux/store";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import NewAccount from "./components/NewAccount/NewAccount";
import RecipeSearch from "./components/RecipeSearch/RecipeSearch";
import Dashboard from './components/Dashboard/Dashboard'
import * as ROUTES from './constants/routes'
import { withAuthentication } from './session/';

const App = () => (  
    <>
      <Provider store={store}>
        <Router>
          <div className="app">
            <Navbar />
            <Route path={ROUTES.LANDING} exact component={Header} />
            <Route path={ROUTES.RECIPE_SEARCH} exact component={RecipeSearch} />
            <Route path={ROUTES.LOGIN} exact component={Login} />
            <Route path={ROUTES.SIGNUP} exact component={NewAccount} />
            <Route path={ROUTES.DASHBOARD} exact component={Dashboard} />
            <Footer />
          </div>
        </Router>
      </Provider>
    </>
  );

export default withAuthentication(App);
