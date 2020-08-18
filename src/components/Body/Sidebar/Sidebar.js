import React from 'react';
import styles from './Sidebar.module.scss'

const Sidebar = () => (
    <>
        <div className={styles.mainfilter}>
            <h2>Recipes</h2> <p>Clear filter</p>
            <div>
                <label>Breakfast <input type="checkbox"></input></label>
                <label>Lunch <input type="checkbox"></input></label>
                <label>Dinner <input type="checkbox"></input></label>
                <label>Snacks <input type="checkbox"></input></label>
            </div>
        </div>
        
        <div className={styles.nutrients}>
            <h2>Nutrients</h2> <p>Clear filter</p>
            <div className={styles.nutrientsfilter}>
                <label>Balanced <input type="checkbox"></input></label>
                <label>High Fiber <input type="checkbox"></input></label>
                <label>High Protein <input type="checkbox"></input></label>
                <label>Low Carb <input type="checkbox"></input></label>
                <label>Low fat <input type="checkbox"></input></label>
            </div>
        </div>

        <div className={styles.cuisine}>
            <h2>Cuisines</h2> <p>Clear filter</p>
            <div className={styles.cuisinefilter}>
                <label>American <input type="checkbox"></input></label>
                <label>Asian <input type="checkbox"></input></label>
                <label>Chinese <input type="checkbox"></input></label>
                <label>French <input type="checkbox"></input></label>
                <label>Italian <input type="checkbox"></input></label>
                <label>Mexican <input type="checkbox"></input></label>
            </div>
        </div>
    </>
)

export default Sidebar;