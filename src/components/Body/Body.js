import React from 'react';
import Sidebar from './Sidebar/Sidebar'
import styles from './Body.module.scss'

const Body = () => {
    
        return (
            <>
                <div className={styles.recipebody}>
                    <Sidebar />
                </div>
            </>
        )
};

export default Body;