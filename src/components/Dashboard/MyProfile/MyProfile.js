import React from "react";
import firebase from "firebase/app";
import styles from "./MyProfile.module.scss";

const MyProfile = () => {
  return (
    <>
      <div className={styles.profile}>
        <img
          src={firebase.auth().currentUser.photoURL}
          className={styles.avatar}
          alt="Profile Photo"
        ></img>

        <div className={styles.label}>
          <label>Full Name</label>
          <input
            type="text"
            defaultValue={firebase.auth().currentUser.displayName}
          ></input>
        </div>

        <div className={styles.label}>
          <label>E-Mail</label>
          <input
            type="email"
            defaultValue={firebase.auth().currentUser.email}
          ></input>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
