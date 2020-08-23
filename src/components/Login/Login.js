import React, { useState } from "react";
import styles from "./Login.module.scss";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { withFirebase } from '../../firebase';
import { withRouter} from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import { compose } from 'recompose';

const SignInPage = () => (
  <div>
    <Login />
  </div>
);

const INITIAL_STATE = {
  email: "",
  password: "",
  eyeState: true,
  error: null
}

function LoginBase(props) {
  const [state, setState] = useState({ ...INITIAL_STATE });

  const changePassHandler = () => {
    setState((prevState) => ({
      ...state,
      eyeState: !prevState.eyeState,
    }));
  };

  const handleChange = (evt) => {
    setState({
      ...state,
      [evt.target.id]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const { email, password } = state;

    props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        setState({ ...INITIAL_STATE });
        props.history.push(ROUTES.DASHBOARD);
      })
      .catch((error) => {
        setState({ error });
      });
  };

  const { email, password, eyeState, error } = state;

  const isInvalid = email === "" || password === "";

  return (
    <>
      <div className={styles.login}>
        <p>Log in to your MealTable account</p>
        <input
          type="email"
          placeholder="Email address"
          onChange={handleChange}
          id="email"
        ></input>
        <div>
          <input
            type={eyeState ? "password" : "text"}
            placeholder="Password"
            id="password"
            onChange={handleChange}
          ></input>{" "}
          <span onClick={changePassHandler}>
            {eyeState ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>
        <label className={styles.remember}>
          <input type="checkbox"></input> Remember Me
        </label>

        {error && <p className={styles.error}>{error.message}</p>}

        <button
          className={!isInvalid ? styles.signup : styles.disabled}
          onClick={handleSubmit}
          disabled={isInvalid}
        >
          LOGIN
        </button>
        <p className={styles.forgot}>Forgot Password?</p>
      </div>
    </>
  );
}

/*class LoginBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  changePassHandler = () => {
    this.setState((prevState) => ({
      eyeState: !prevState.eyeState,
    }));
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.id]: evt.target.value,
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.DASHBOARD);
      })
      .catch((error) => {
        this.setState({ error });
      });
  };

  render() {
    const { email, password, eyeState, error } = this.state;

    const isInvalid = email === "" || password === "";
    return (
      <>
        <div className={styles.login}>
          <p>Log in to your MealTable account</p>
          <input
            type="email"
            placeholder="Email address"
            onChange={this.handleChange}
            id="email"
          ></input>
          <div>
            <input
              type={eyeState ? "password" : "text"}
              placeholder="Password"
              id="password"
              onChange={this.handleChange}
            ></input>{" "}
            <span onClick={this.changePassHandler}>
              {eyeState ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          <label className={styles.remember}>
            <input type="checkbox"></input> Remember Me
          </label>

          {error && <p className={styles.error}>{error.message}</p>}

          <button
            className={!isInvalid ? styles.signup : styles.disabled}
            onClick={this.handleSubmit}
            disabled={isInvalid}
          >
            LOGIN
          </button>
          <p className={styles.forgot}>Forgot Password?</p>
        </div>
      </>
    );
  }
}*/


const Login = compose(withRouter, withFirebase) (LoginBase);

export default SignInPage;

export {Login}

///`className={styles.eye} onClick={passwordStateHandler}`
