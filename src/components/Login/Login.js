import React, { useState } from "react";
import styles from "./Login.module.scss";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import * as ROUTES from '../../constants/routes'
import { compose } from 'recompose';

const SignInPage = () => {

const [state, setState] = useState({
  email: "",
  password: "",
  eyeState: true,
  error: null
})

  return (
    <>
      <div className={styles.login}>
        <p>Log in to your MealTable account</p>
        <input
          type="email"
          placeholder="Email address"
          id="email"
        ></input>
        <div>
          <input
            type={state.eyeState ? "password" : "text"}
            placeholder="Password"
            id="password"
          ></input>{" "}
          <span>
            {state.eyeState ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>
        <label className={styles.remember}>
          <input type="checkbox"></input> Remember Me
        </label>

        {state.error && <p className={styles.error}>{state.error.message}</p>}

        <button>
          LOGIN
        </button>
        <p className={styles.forgot}>Forgot Password?</p>
      </div>
    </>
  );
}

export default SignInPage;
