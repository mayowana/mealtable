import React, { Component } from "react";
import styles from "./NewAccount.module.scss";
import { withFirebase } from "../../firebase";
import { withRouter } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { compose } from "recompose";
import { FaGoogle } from 'react-icons/fa'
import { IconContext } from "react-icons";

const SignUpPage = () => (
  <div>
    <NewAccount />
  </div>
);

const INITIAL_STATE = {
  displayName: "",
  email: "",
  phoneNumber: "",
  password: "",
  cpass: "",
  error: null,
};

class NewAccountBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.id]: evt.target.value,
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const { displayName, email, phoneNumber, password } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
        return this.props.firebase
          .user(authUser.user.uid)
          .set({
            displayName,
            phoneNumber,
            email,
          });
      })
      .then((authUser) => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.DASHBOARD);
      })
      .catch((error) => {
        this.setState({ error });
      });
  };

  googleLogin = (evt) => {
    evt.preventDefault();
    this.props.firebase
    .signInWithGoogle();
  }

  render() {
    const {
      displayName,
      email,
      phoneNumber,
      password,
      cpass,
      error,
    } = this.state;

    const isInvalid =
      displayName === "" ||
      email === "" ||
      phoneNumber === "" ||
      password === "" ||
      password !== cpass;

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
              value={displayName}
              onChange={this.handleChange}
            ></input>
            <input
              type="email"
              placeholder="Email address"
              required
              id="email"
              value={email}
              onChange={this.handleChange}
            ></input>
            <input
              type="text"
              placeholder="Phone number"
              required
              id="phoneNumber"
              value={phoneNumber}
              onChange={this.handleChange}
            ></input>
            <input
              type="password"
              placeholder="Password"
              required
              id="password"
              value={password}
              onChange={this.handleChange}
            ></input>
            {cpass !== "" && cpass !== password ? (
              <label className={styles.warn}>Passwords don't match</label>
            ) : (
              <label className={styles.hide}>HIDE</label>
            )}
            <input
              type="password"
              placeholder="Confirm Password"
              required
              id="cpass"
              value={cpass}
              onChange={this.handleChange}
              className={styles.cpass}
            ></input>

            {error && <p className={styles.error}>{error.message}</p>}

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
    );
  }
}

const NewAccount = compose(withRouter, withFirebase)(NewAccountBase);

export default SignUpPage;

export { NewAccount };
