import React, {Component, useState} from 'react'
import styles from './Dashboard.module.scss'
import MyProfile from './MyProfile/MyProfile'

const Dashboard = () => {
     
    const [state, setState] = useState({
          loading: false,
          users: [],
        });

    return( <>
    <div className={styles.dash}>
        <div className={styles.sidebar}>
            <p>My Profile</p>
            <p>Saved Recipes</p>
            <p>Meal Tables</p>
        </div>

        <div className={styles.mainbar}>
            <MyProfile />
        </div>
    </div>
    </>
    )
};

export default Dashboard;
