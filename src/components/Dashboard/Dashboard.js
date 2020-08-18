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
    
    componentDidMount() {
        this.setState({ loading: true });
     
        this.props.firebase.users().on('value', snapshot => {
            const usersObject = snapshot.val();

            const usersList = Object.keys(usersObject).map(key => ({
                ...usersObject[key],
                uid: key,
              }));
              
          this.setState({
            users: snapshot.val(),
            loading: false,
          });
        });
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
