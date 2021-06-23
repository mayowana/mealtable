import React, { Component, useState } from "react";
import styles from "./NewAccount.module.scss";
import * as ROUTES from "../../constants/routes";
import { compose } from "recompose";
import { FaGoogle } from 'react-icons/fa'
import { IconContext } from "react-icons";
   
const NewAccount = () => {
  
  const [state, setState ]= useState({
    displayName: "",
    email: "",
    phoneNumber: "",
    password: "",
    cpass: "",
    error: null,
  });

  const isInvalid =
      state.displayName === "" ||
      state.email === "" ||
      state.phoneNumber === "" ||
      state.password === "" ||
      state.password !== state.cpass;

  return (
      <>
        <div className={styles.newaccount}>
          <p>Create your MealTable account</p>

          <IconContext.Provider value={{ color: "white", size: "1.5rem"}}>
          <div className={styles.signup} onClick={this.googleLogin} >
            <FaGoogle />
            <p>Sign up with Google</p>
            </div>
            </IconContext.Provider>

          <div>
            <p>- OR -</p>
          </div>
          <form>
            <input
              type="text"
              placeholder="Full name"
              required
              id="displayName"
              value={state.displayName}
              onChange={this.handleChange}
            ></input>
            <input
              type="email"
              placeholder="Email address"
              required
              id="email"
              value={state.email}
              onChange={this.handleChange}
            ></input>
            <input
              type="text"
              placeholder="Phone number"
              required
              id="phoneNumber"
              value={state.phoneNumber}
              onChange={this.handleChange}
            ></input>
            <input
              type="password"
              placeholder="Password"
              required
              id="password"
              value={state.password}
              onChange={this.handleChange}
            ></input>
            {state.cpass !== "" && state.cpass !== state.password ? (
              <label className={styles.warn}>Passwords don't match</label>
            ) : (
              <label className={styles.hide}>HIDE</label>
            )}
            <input
              type="password"
              placeholder="Confirm Password"
              required
              id="cpass"
              value={state.cpass}
              onChange={this.handleChange}
              className={styles.cpass}
            ></input>

            {state.error && <p className={styles.error}>{state.error.message}</p>}

            <button
              className={!isInvalid ? styles.signup : styles.disabled}
              onClick={this.handleSubmit}
              disabled={isInvalid}
            >
              SIGN UP
            </button>
          </form>
        </div>
        <div className={styles.forgot}>
          <p>Forgot your password?</p>
        </div>
      </>
    )};


export default NewAccount;
