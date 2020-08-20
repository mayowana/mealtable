import React, {Component} from 'react'
import styles from './Dashboard.module.scss'
import MyProfile from './MyProfile/MyProfile'
import {withFirebase} from '../../firebase'

class Dashboard extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
          loading: false,
          users: [],
        };

    }
    

    render() {
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
);
}
}

export default withFirebase(Dashboard);
