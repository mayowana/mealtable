import React from "react";
import firebase from "firebase/app";
import styles from "./MyProfile.module.scss";

const MyProfile = () => {

    const user = firebase.auth().currentUser;
    
  return (
    <>
      <div className={styles.profile}>
        <img
          src={user.photoURL}
          className={styles.avatar}
          alt="Profile"
        ></img>

        <div className={styles.label}>
          <label>Full Name</label>
          <input
            type="text"
            defaultValue={user.displayName}
          ></input>
        </div>

        <div className={styles.label}>
          <label>E-Mail</label>
          <input
            type="email"
            defaultValue={user.email}
          ></input>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
